const {
  override,
  fixBabelImports,
  addDecoratorsLegacy,
} = require('customize-cra')

module.exports = override(
  fixBabelImports("import",{
    libraryName: "antd",
    libraryDirrctory: "es",
    style: "css",
  }),
  addDecoratorsLegacy(), // 配置装饰器
)