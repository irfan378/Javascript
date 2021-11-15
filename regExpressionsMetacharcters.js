let regex=/irfan/;
regex=/^irfan/ //starts with
regex=/irfan$/ //ends with
regex=/i.rfan/  //dot matches one charcter
regex=/i*fan/ //matches 0 or more charcter
regex=/ir?fan?>/ // ? means charcter after it is optional
regex=/i\*rfan/ //means * is not optional 

let str="irfan is irfan";
let result=regex.exec(str);
console.log("The result from exec is ",result);

if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
}
