module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: false, // enable to see loaded polyfills
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/typescript',
    '@babel/preset-react',
  ],
  plugins: ['react-hot-loader/babel', '@babel/plugin-transform-runtime'],
};
