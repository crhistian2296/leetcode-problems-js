/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length == t.length) {
        let perfectMatch = 0;
        for (let sIndex = 0; sIndex < (s.length); sIndex++) {
            for (let tIndex = 0; tIndex < (t.length); tIndex++) {
                if (s[sIndex] == t[tIndex]) {
                    perfectMatch += 1;
                    t = t.split("t[tIndex]").join("");
                    continue;
                }
            }
        }
        if (t == "") {
            return true;
        }
    }
    return false;
}