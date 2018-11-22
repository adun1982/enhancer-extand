module.exports = {
    /**
     *
     *
     * @param {object} array
     * @param {string} key
     * @returns {object[string][object]}
     */
    data_format: function(array, key) {

        var formated = [];

        for (i = 0; i < array.length; i++) {
            formated[array[i][key]] = array[i]
        }
        return formated
    },
    /**
     *
     *
     * @param {object[]} src
     * @param {object[]} dst
     * @param {string} value
     */
    data_compar: function(src, dst, value) {
        for (i = 0; i < src.length; i++) {
            name = [src[i].name]
            if (dst[name]) {
                for (j in value) {
                    src[i][value[j]] = dst[name][value[j]]
                }
            }
        }
    }
}