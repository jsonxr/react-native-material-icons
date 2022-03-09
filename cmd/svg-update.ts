import path from 'path';
import fs from 'fs/promises';
import { spawn, SpawnOptionsWithoutStdio } from 'child_process';

const execute = async (command: string, options?: SpawnOptionsWithoutStdio) =>
  new Promise((resolve, reject) => {
    const [cmd, ...args] = command.split(' ');
    const shell = spawn(cmd, args, options);

    shell.stdout.on('data', (data: any) => {
      console.log(`${data}`);
    });

    shell.stderr.on('data', (data: any) => {
      console.error(`${data}`);
    });

    shell.on('close', (code: number) => {
      if (code) {
        reject(code);
      } else {
        resolve(code);
      }
    });
  });

async function main() {
  const directory = path.resolve('.material-design-icons');
  try {
    const stat = await fs.stat(directory);
    console.log(`.material-design-icons$ git pull...`);
    await execute('git pull', { cwd: directory });
  } catch {
    // git clone...
    console.log(`git clone https://github.com/google/material-design-icons.git --depth 1 ${directory}...`);
    await execute(`git clone https://github.com/google/material-design-icons.git --depth 1 ${directory}`);
  }
}

main();
