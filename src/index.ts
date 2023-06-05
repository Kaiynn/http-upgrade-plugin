/*
 * @Author: kayinn许小强 79544105@qq.com
 * @Date: 2023-06-05 14:45:10
 * @LastEditors: kayinn许小强 79544105@qq.com
 * @LastEditTime: 2023-06-05 16:10:55
 * @FilePath: /http-upgrade-plugin/src/index.ts
 * @Description: http协议请求升级https协议请求, webpack构建插件
 */
interface IHttpUpgrade {
    insertStr(soure:string, start:number, newStr:string):string,
    apply(compiler:any):void
}

interface Options {
    template:string,
    isUpgrade:Boolean,
}

module.exports = class HttpUpgrade implements IHttpUpgrade {
    private template:string
    private isUpgrade:Boolean

    constructor(options:Options){
        const { template = 'index.html', isUpgrade = false } = options || {}
        this.template = template;
        this.isUpgrade = isUpgrade;
    }

    insertStr(soure:string, start:number, newStr:string):string{   
        return soure.slice(0, start) + newStr + soure.slice(start);
    }

    apply(compiler:any) {
        compiler.hooks.emit.tap("HttpUpgrade", (compilation:any) => {
            if(this.isUpgrade){
                try {
                    const asset = compilation.assets[this.template];
                    let contentHtml = asset.source();
                    let start = contentHtml.lastIndexOf('<meta');
                    let fileContent = this.insertStr(contentHtml,start,'<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />')
                    compilation.assets[this.template] = {
                        source: () => {
                            return fileContent;
                        },
                        size: () => {
                            return Buffer.byteLength(fileContent, 'utf8');
                        }
                    }
                 }
                 catch (e) {
                    throw new Error(e);
                 }
            }
        })
      }
}