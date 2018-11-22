var excel = require('./extand/excel.js')
var data_proc = require('./extand/data_proc.js')
module.exports = {
    excel_format: excel.excel_format,
    excel_insert: excel.excel_insert,
    data_format: data_proc.data_format,
    data_compar: data_proc.data_compar
}