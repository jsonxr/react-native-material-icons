import path from 'path';
import fs from 'fs/promises';
import { readdir } from 'fs/promises';
import { upperFirst, camelCase } from 'lodash';
import format from 'xml-formatter';
import PromisePool from 'es6-promise-pool';

type TMIcon = {
  name: string;
  category: string;
  variants: { [x: string]: string };
};

const writeFile = async (icon: TMIcon, root: string) => {
  //console.log(icon.name);
  await fs.writeFile(path.resolve(`${root}/${icon.name}.tsx`), tsx(icon.name, icon.variants));
};

const writeIndex = async (icons: TMIcon[], root: string) => {
  const files = icons.map((i) => `export * from './${i.name}';`);
  const content = files.join('\n') + '\n';
  await fs.writeFile(path.resolve(`${root}/index.ts`), content);
};

const tsx = (name: string, xml: Record<string, string>) => {
  // "property": `<svg...>...</svg>`,
  const properties = Object.keys(xml)
    .map((k) => {
      const pretty = '\n    ' + format(xml[k], { indentation: '    ' }).split('\n').join('\n    ');
      return `  ${k}: \`${pretty}\``;
    })
    .join(',\n');

  return `import { createSvgIcon } from '../src/createSvgIcon';

export const ${name} = createSvgIcon({
${properties}
});

`;
};

const prefix = 'materialicons';
async function main() {
  const icons: TMIcon[] = [];

  const directory = path.resolve('.material-design-icons/src');
  const categories = await readdir(directory);
  for (const category of categories) {
    const categoryDir = path.resolve(directory, category);
    if (!(await fs.stat(categoryDir)).isDirectory()) {
      continue;
    }

    const dirs = await readdir(categoryDir);
    for (const name of dirs) {
      const variantDir = path.resolve(categoryDir, name);
      if (!(await fs.stat(variantDir)).isDirectory()) {
        continue;
      }

      const variantNames = await readdir(variantDir);

      const ComponentName: string = isNaN(+name.charAt(0)) ? upperFirst(camelCase(name)) : `M${camelCase(name)}`;

      if (name === 'addchart') {
        console.log('skipping due to conflict with editor/add_chart... ', variantDir);
        continue;
      }

      const icon: TMIcon = {
        name: ComponentName,
        category,
        variants: {},
      };
      await Promise.all(
        variantNames.map(async (v) => {
          const f = path.resolve(variantDir, v, '24px.svg');
          const variantName = v.length === prefix.length ? 'default' : v.substring(prefix.length);
          icon.variants[variantName] = await fs.readFile(f, { encoding: 'utf-8' });
        })
      );

      icons.push(icon);
    }
  }

  const ROOT = 'icons';

  const generatePromises = function* () {
    for (const icon of icons) {
      yield writeFile(icon, ROOT);
    }
  };
  const iterator: any = generatePromises();
  const pool = new PromisePool(iterator, 3);
  await pool.start();

  writeIndex(icons, ROOT);
}

main();

// var delayValue = function (value: number, time: number) {
//   return new Promise(function (resolve, reject) {
//     console.log('Resolving ' + value + ' in ' + time + ' ms');
//     setTimeout(function () {
//       console.log('Resolving: ' + value);
//       resolve(value);
//     }, time);
//   });
// };

// const generatePromises = function* () {
//   for (let count = 1; count <= 5; count++) {
//     yield delayValue(count, 1000);
//   }
// };

// const promiseIterator = generatePromises();
// const pool = new PromisePool(promiseIterator as any, 3);

// pool.start().then(() => console.log('Complete'));
