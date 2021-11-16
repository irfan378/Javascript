// const regex=/^i/i;
// Character Sets
let regex=/i[a-z]fan/;//can be from a-z.
regex=/i[rf]fan/;//can be rf.
regex=/i[^rf]fan/;//cannnot be rf.
regex=/i[rf]fa[nm]/;
regex=/i[a-zA-Z]fa[nm0-9]/;//can be capital or small and nm or 0 to 9.

// Quantifiers
regex=/ir{3}fan/ // r can occur exactly two times.
regex=/ir{0,3}fan/ // r can occur 0 to 3 times.

// Groupings
regex=/(irf){2}an([0-9]r){3}/ //
const str="irfirfan3r4r6r";
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
}