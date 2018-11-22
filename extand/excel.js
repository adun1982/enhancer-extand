module.exports = {
    /**
     *
     * @description 输入“EXCEL”和"格式化参数“把中文表头转换为英文。格式化参数格式{"中文表头":"英文"}
     * @param {JSON} excel
     * @param {object} param
     * @returns
     */
    excel_format: function(excel, param) {

        for (let i = 0; i < excel.length; i++) {
            for (j in param) {
                excel[i][param[j]] = excel[i][j]
                delete excel[i][j]
            }
        }

    },
    /**
     *
     *
     * @param {JSON} excel
     * @param {object} param
     * @returns
     */
    excel_insert: function(excel, param) {
        for (let i = 0; i < excel.length; i++) {
            for (j in param) {
                excel[i][j] = ""
            }
        }
        return excel
    }
}