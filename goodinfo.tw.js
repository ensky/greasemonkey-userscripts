// ==UserScript==
// @name         GoodInfo.TW Enhancement 台灣股市資訊網加強版
// @namespace    http://www.ensky.tw
// @version      0.1
// @description  enhance
// @author       Ensky Lin
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.min.js
// @match        http://goodinfo.tw/StockInfo/StockDetail.asp*
// ==/UserScript==

/* jshint ignore:start */
var inline_src = (<><![CDATA[
/* jshint ignore:end */
/* jshint esnext: true */

    let stockID = location.search.match(/STOCK_ID=(\d+)/)[1];
    let iframe = document.createElement('iframe');
    iframe.src = 'https://tw.screener.finance.yahoo.net/screener/check.html?symid=' + stockID;
    iframe.width = '100%';
    iframe.height = '750';
    document.body.insertBefore(iframe, document.querySelectorAll('body > table')[2]);

/* jshint ignore:start */
]]></>).toString();
var c = babel.transform(inline_src);
eval(c.code);
/* jshint ignore:end */
