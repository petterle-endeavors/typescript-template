import { typescript } from 'projen';
import { NodePackageManager } from 'projen/lib/javascript';

const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'name',
  description: 'A cool typescript project',
  projenrcTs: true,
  license: 'MIT',
  copyrightOwner: 'Jacob Petterle',
  devDeps: ['projen@^0.75', 'pnpm@^8.0', 'prettier@^3.2'],
  packageManager: NodePackageManager.PNPM,
  eslintOptions: {
    dirs: ['src'],
    prettier: true,
  },
  prettier: true,
  prettierOptions: {
    settings: {
      singleQuote: true,
    },
  },
  devContainer: true,
});

project.addScripts({
  preinstall: 'npx only-allow pnpm',
  lint: 'eslint . --fix --max-warnings 0',
});

project.gitignore.exclude('.pnpm-store/');

project.synth();
