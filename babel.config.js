module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  //按需引入vant组件
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      //自定义vant样式
      style: name => `${name}/style/less`
    }, 'vant']
  ]
}
