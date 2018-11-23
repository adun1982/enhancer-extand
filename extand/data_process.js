module.exports = {
    /**
     *
     *
     * @param {object} array
     * @param {string} key
     * @returns {object[string][object]}
     */
    data_format: function(array, key) {

        var formated = {};

        for (i = 0; i < array.length; i++) {
            formated[array[i][key]] = array[i]
        }
        return formated
    },
    /**
     *
     *
     * @param {array} source 源数据
     * @param {object} dest 对比数据
     * @param {string} key 对比键
     * @param {array} value 同步值
     */
    data_compare: function(src, dst, key, value) {
        for (i = 0; i < src.length; i++) {
            field = src[i][key]
            if (dst[field]) {
                for (j in value) {
                    src[i][value[j]] = dst[field][value[j]]
                }
            }
        }
    }
}