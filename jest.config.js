/*
 * @Author: kayinn许小强 79544105@qq.com
 * @Date: 2023-06-05 15:55:45
 * @LastEditors: kayinn许小强 79544105@qq.com
 * @LastEditTime: 2023-06-05 15:55:57
 * @FilePath: /http-upgrade-plugin/jest.config.js
 * @Description: jest配置
 */
module.exports = {
  "transform": {
    ".(ts|tsx)": "ts-jest"
  },
  "testRegex": "/test/.*\\.(test|spec)\\.(ts)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ],
  "collectCoverageFrom": [
    "src/*.{js,ts}",
    "src/**/*.{js,ts}"
  ],
}