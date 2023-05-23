import { defineConfig } from '@data-eden/config';
import { readFileSync } from 'node:fs';
import { createMatchPath } from 'tsconfig-paths';

const tsConfig = JSON.parse(readFileSync('./tsconfig.json'));
const matcher = createMatchPath(process.cwd(), tsConfig.compilerOptions.paths);

function resolver(path, options) {
  const extensions = ['.tsx', '.jsx', '.js', '.ts'];

  return matcher(path, undefined, undefined, extensions);
}

// TODO: figure out why the @data-eden/codgen types are not reflecting, we might need to collocate all config types to @data-eden/config
export default defineConfig({
  codegen: {
    baseDir: 'src/graphql',
    schemaPath: 'schema.graphql',
    documents: ['**/*.graphql', '**/*.tsx'],
    resolver,
  },
});
