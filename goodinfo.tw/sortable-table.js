// ==UserScript==
// @name         GoodInfo.TW Enhancement 台灣股市資訊網 可搜尋表格
// @namespace    http://www.ensky.tw
// @version      0.1
// @description  強化股票陳列表格
// @author       Ensky Lin
// @match        http://goodinfo.tw/StockInfo/StockList.asp*
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.slim.min.js
// @require      http://www.kryogenix.org/code/browser/sorttable/sorttable.js
// @grant        none
// ==/UserScript==

(function() {
    // jshint esnext: true
    'use strict';
    $('.solid_1_padding_3_1_tbl').hide();
    $('#tblStockList > tbody > tr:first-child > td').each((idx, td) => td.innerHTML = td.innerText.replace(/\n/g, '<br>'));
    $('#tblStockList').addClass('sortable').show();
})();
