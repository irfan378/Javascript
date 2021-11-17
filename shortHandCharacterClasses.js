let regex=/\wrf/;//word character - _ or alphabet or numbers.
regex=/\w+3r/;//means one or more word characters.
regex=/\Wbhai/;//non word character.
regex=/\W+bhai/;//means more than one non word character.
regex=/number \d999/;// \d means digit
regex=/number \d+999/;// \d+ means more than one digit
regex=/\D999/;//\d means non digit
regex=/\D+ss999/;//\d means more than one digit
regex=/\snumber/;//match whitespace character
regex=/\s+number/;//match more than one whitespace character
regex=/\Snumber/;//match non whitespace character
regex=/\S+number/;//match more than one non whitespace character
regex=/4r6r\b/;//Word boundary

// Assertions
regex=/i(?=r)/;
regex=/i(?!r)/;
const str="irfirfan3r4r6r bhainumber 89999hf9999";
let result=regex.exec(str);
console.log("The result exec is ",result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
}