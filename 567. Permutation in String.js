/*
const checkInclusion = function (s1, s2) {
  // corner cases
  if (!s1 || !s2 || s1.length > s2.length) {
    return false;
  }

  // create a map for [character:count] of s1
  const map = new Map();

  for (let i = 0; i < s1.length; i++) {
    const currChar = s1[i];

    map.set(currChar, (map.get(currChar) || 0) + 1);
  }

  // do a sliding window with
  // que - length of current successfull subsequence
  // fast - point to current index
  // slow - point to the last possible character for current fast index
  // seqMap - map for [character:amount] in a current valid subsequence

  let seqMap = new Map();
  let que = 0;
  let slow = 0;
  let fast = 0;

  // iterate until end
  while (fast < s2.length) {
    const currChar = s2[fast];
    const currCharAmount = map.get(currChar);

    // if a char at the fast index is not in the original string
    // that means the whole previous string is invalid
    // since permutation can't contain other symbols
    if (!map.has(currChar)) {
      // start from the scratch from next index
      que = 0;
      slow = fast + 1;
      fast = fast + 1;
      seqMap = new Map();
      continue;
    } else {
      // if the current character in the first string
      // that mean we have two options
      // we can add this character and increase the subsequence
      // or it is over the count of this character in the original map
      // and we should move the slow pointer forward until get to position
      // where this character is available
      const currentSequenceAmount = seqMap.get(currChar) || 0;

      if (currentSequenceAmount < currCharAmount) {
        seqMap.set(currChar, currentSequenceAmount + 1);
        que++;
        fast++;
      } else {
        // this character is over the target count,
        // so we remove all chars from the tail of window
        // and dont forget to remove it from the map;
        while (seqMap.get(currChar) >= currCharAmount) {
          que--;
          seqMap.set(s2[slow], seqMap.get(s2[slow]) - 1);
          slow++;
        }

        continue;
      }
    }

    // after the we have length of all chars in the map
    // and know that all chars in the map is valid, so we just check it with the length of
    // the searched string
    if (que === s1.length) {
      return true;
    }
  }

  // otherwise subsequence is not full or not exist
  return false;
};
 */

const stringToObject = (s) => {
  let obj = Array.from(s).reduce((map, letter) => {
    map[letter] = map[letter] ? ++map[letter] : 1;
    return map;
  }, {});
  return obj;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const map = stringToObject(s1);

  for (let i = 0; i < s2.length; i++) {
    if (map[s2[i]] !== undefined) {
      map[s2[i]]--;
    }
    if (i >= s1.length && map[s2[i - s1.length]] !== undefined) {
      map[s2[i - s1.length]]++;
    }
    if (Object.values(map).every((value) => value === 0)) {
      return true;
    }
  }
  return false;
};
console.log(checkInclusion('abcdxabcde', 'abcdeabcdx'));
