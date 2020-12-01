/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let letterCount = {};

    for (let letter of s) {
        if (letterCount[letter]) {
            letterCount[letter]++;
        } else {
            letterCount[letter] = 1;
        }
    }

    for (let letter of t) {
        if (letterCount[letter] === undefined) {
            return false;
        }

        if (letterCount[letter] < 1) {
            return false;
        }

        letterCount[letter]--;
    }

    return true;
};