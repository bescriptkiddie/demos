module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: '> 1%, not dead'
      }
    ],
    '@babel/preset-typescript'
  ]
};
