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
    ["@babel/preset-react", {
      "runtime": "automatic"
    }]
  ],
  plugins: ['@babel/plugin-transform-runtime'],
};
