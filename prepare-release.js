import { copyFile } from 'node:fs/promises';

(async () => {
  await copyFile('package.json', 'dist/package.json');
  await copyFile('README.md', 'dist/README.md');
  await copyFile('LICENSE.md', 'dist/LICENSE.md');
})();
