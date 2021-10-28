const name='irfan';
const age=19;
const job='Web Developer';
const city='Sringar';
let html;

// Without template literals(es5)
// html='<ul>'+
//         '<li>Name: ' + name + '</li>' +
//         '<li>Age: ' + age + '</li>' +
//         '<li>Job: ' + job + '</li>' +
//         '<li>City: ' + city + '</li>'+ 
//         '</ul>';
// document.body.innerHTML=html;
function hello(){
    return 'hello';
}
// With template strings(es6)
html=`
<ul>
<li>Name: ${name}</li>
<li>Name: ${age}</li>
<li>Name: ${job}</li>
<li>Name: ${city}</li>
<li>Name: ${2+2}</li>
<li>Name: ${hello()}</li>
<li>Name: ${age>30?'Over 30':'under 30'}</li>
</ul>
`;
document.body.innerHTML=html;