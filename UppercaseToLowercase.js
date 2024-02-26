let s= "HELlO";

var toLowerCase = function(s) {
    let uppercaseValue = "";
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
            uppercaseValue = uppercaseValue + String.fromCharCode(s.charCodeAt(i) + 32);
        }
        else {
            uppercaseValue += s[i];
        }
    }
    return uppercaseValue;

};
console.log(toLowerCase(s));
