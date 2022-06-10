var myAtoi = function (s) {
  let i = 0;
  let sign = 1;
  let char = '';
  let numberOutput = 0;
  const MIN_VALUE = -(2 ** 31);
  const MAX_VALUE = 2 ** 31 - 1;
  let signChecker = 0;

  while (s[i] == ' ') {
    i++;
  }
  while (s[i] == '+' || s[i] == '-') {
    if (signChecker != 0) return 0;
    if (s[i] == '+') signChecker++;
    if (s[i] == '-') {
      signChecker++;
      sign *= -1;
    }
    i++;
  }
  while (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
    char += s[i];
    i++;
  }
  numberOutput = parseInt(char);
  if (isNaN(numberOutput)) return 0;
  numberOutput *= sign;
  if (numberOutput < MIN_VALUE) return MIN_VALUE;
  if (numberOutput > MAX_VALUE) return MAX_VALUE;
  return numberOutput;
};
