/*
 * @Author: kayinn许小强 79544105@qq.com
 * @Date: 2023-03-08 16:50:21
 * @LastEditors: kayinn许小强 79544105@qq.com
 * @LastEditTime: 2023-06-05 16:11:33
 * @FilePath: /color-gradient-lamination/test/cg.test.ts
 * @Description: 测试用例
 */
const HttpUpgrade = require('../src/index')

it('HttpUpgrade测试', () => {
    const mockCallback1 = new HttpUpgrade({template:"index1.html", isUpgrade:true});
    const mockCallback2 = new HttpUpgrade();
    expect(mockCallback1.template).toEqual("index1.html")
    expect(mockCallback1.isUpgrade).toEqual(true)
    expect(mockCallback2.template).toEqual("index.html")
    expect(mockCallback2.isUpgrade).toEqual(false)
})