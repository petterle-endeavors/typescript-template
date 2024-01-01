import { typescript } from 'projen';
import { NodePackageManager } from 'projen/lib/javascript';


const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'name',
  description: 'A cool typescript project',
  projenrcTs: true,
  license: 'MIT',
  copyrightOwner: 'Jacob Petterle',
  deps: [
    'projen@^0.75',
    'pnpm@^8.0',
  ],
  packageManager: NodePackageManager.PNPM,
});

project.addScripts({
  preinstall: 'npx only-allow pnpm',
});

project.gitignore.exclude('.pnpm-store/');

project.synth();
