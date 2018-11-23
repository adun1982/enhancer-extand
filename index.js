var excel = require('./extand/excel.js')
var data_process = require('./extand/data_process.js')
module.exports = {
    excel_format: excel.excel_format,
    excel_insert: excel.excel_insert,
    
    data_format: data_process.data_format,
    data_compare: data_process.data_compare
}