import createConfig from '@tabnews/config/vitest';

const config = createConfig({
  test: {
    coverage: {
      include: ['src'],
      exclude: ['**/*.test.*', '**/*.spec.*'],
    },
  },
});

export default config;
