// function func1(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             const error=true;
//             if (!error) {
//                 console.log('Function: Your promise has been resolved');
//                 resolve();
//             }
//             else{
//                 console.log('Function:Your promise has not been resolved');
//                 reject('Sorry not fulfilled');
//             }
//         },2000);
//     })
// }
// func1().then(function(){
//     console.log("Irfan: Thanks for resolving");
// }).catch(function(){
//     console.log("Irfan:Very bad bro.");
// })


// Pretend that this response is coming from the server
const students=[
    {name:"irfan",subject:"javascript"},
    {name:"person",subject:"Machine Learning"}
]

function enrollStudent(student){
return new Promise(function(resolve,reject){
    setTimeout(function(){
        students.push(student);
        console.log("Students has been enrolled");
        const error=false;
        if (!error) {
            resolve();  
        }
       else{
           reject();
       }
    },5000);
})
}
function getStudents(){
setTimeout(function() {
    let str="";
    students.forEach(function(student) {
       str += `<li> ${student.name} </li>`
    });
    document.getElementById('students').innerHTML=str;
    console.log("Students have been fetched")

}, 1000);
}
let newStudent={name:"Person2",subject:"Python"}
enrollStudent(newStudent).then(function(){
    getStudents();
}).catch(function(){
    console.log('Some error occured')
});