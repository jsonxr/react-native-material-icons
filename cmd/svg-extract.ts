import path from 'path';
import fs from 'fs/promises';
import { readdir } from 'fs/promises';
import { upperFirst, camelCase } from 'lodash';
import format from 'xml-formatter';
import PromisePool from 'es6-promise-pool';
import { REPO_DIR } from './constants';

type TMIcon = {
  name: string;
  path: string;
  svg: string;
};

const writeIndexFile = async (icons: TMIcon[], root: string) => {
  const files = icons.map((i) => `export * from './${i.name}';`);
  const content = files.join('\n') + '\n';
  await fs.writeFile(path.resolve(`${root}/index.ts`), content);
};

const writeTsxFile = async ({ name, svg, ...icon }: TMIcon, root: string) => {
  let content = `// ${icon.path}\nimport { createSvgIcon } from './createSvgIcon';\n\n`;

  const pretty = format(svg, { indentation: '  ' }).split('\n').join('\n  ');

  content += `export const ${name} = createSvgIcon(\n  \`${pretty}\`\n);\n\n`;

  //console.log(content);
  await fs.writeFile(path.resolve(`${root}/${name}.tsx`), content);
};

const scanDirectories = async (
  options: {
    root: string;
    svgFolder: string;
    regex: RegExp;
    exclude: RegExp;
  },
  results: TMIcon[] = [],
  name: string = ''
) => {
  const { root, svgFolder, regex } = options;
  const rootDir = path.join(root, svgFolder);

  const subdir = path.join(rootDir, name);
  const directories = await readdir(subdir);
  for (const dir of directories) {
    const grandchild = path.join(name, dir);
    const stat = await fs.stat(path.join(rootDir, grandchild));
    if (stat.isDirectory()) {
      await scanDirectories(options, results, grandchild);
    } else {
      const matches = grandchild.match(regex);
      if (matches) {
        const exclude = grandchild.match(options.exclude);
        if (exclude) {
          continue;
        }

        const icon: TMIcon = {
          name: `Svg${upperFirst(camelCase(`${matches[1]}-${matches[2]}`))}`,
          path: path.join(svgFolder, grandchild),
          svg: await fs.readFile(path.join(rootDir, grandchild), { encoding: 'utf-8' }),
        };
        results.push(icon);
      }
    }
  }
  return results;
};

async function createFiles(options: { root: string; svgFolder: string; regex: RegExp; exclude: RegExp }) {
  const icons = await scanDirectories(options);

  const ROOT = 'icons';
  const generatePromises = function* () {
    for (const icon of icons) {
      yield writeTsxFile(icon, ROOT);
    }
  };
  const iterator: any = generatePromises();
  const pool = new PromisePool(iterator, 3);
  await pool.start();

  writeIndexFile(icons, ROOT);
}

async function main() {
  createFiles({
    root: path.resolve(`${REPO_DIR}`),
    svgFolder: '/src',
    regex: /^\w+\/(\w+)\/materialicons(\w*)\/24px.svg/,
    exclude: /addchart/,
  });
}

main();
