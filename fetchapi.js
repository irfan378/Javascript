// Button with id myBtn
let myBtn = document.getElementById("myBtn");

// Div with id content
let content = document.getElementById('content');

// function getData(){
//     console.log("started getData");
//     url="irfan.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside first then");
//         return response.text();
//     }).then((data)=>{
//         console.log('Inside second then');
//         console.log(data);
//     })
// }
// function getData(){
//     console.log("started getData");
//     url="https://api.github.com/users";
//     fetch(url).then((response)=>{
//         console.log("Inside first then");
//         return response.json();
//     }).then((data)=>{
//         console.log('Inside second then');
//         console.log(data);
//     })
// }
function postData() {
    url = "https://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"tetetretfd","salary":"1235","age":"26"}';
params={
    method:'post',
    headers:{
        'Content-type':'application/json'
    },
    body:data
}

fetch(url,params).then(response=> response.json())
.then((data) => console.log(data)
)
}

// console.log("Before running getData");
// getData();
postData();
// console.log("after running getData");