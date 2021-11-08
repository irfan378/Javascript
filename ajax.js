letfetchBtn=document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){
    console.log('You have clicked the fetchBtn');

    // Instantiate an xhr Object
    const xhr=new XMLHttpRequest();

    // Open the Object
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    // POST request
    xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true);

    xhr.getResponseHeader('Content-type','application/json');

    // What to do in progress(optional)
    xhr.onprogress=function(){
        console.log('On progress');
    }
    // 
    // xhr.onreadystatechange=function(){
    //     console.log('ready state is ',xhr.readyState)
    // }
    // What to do when response is ready
    xhr.onload=function(){
        if(this.status===200){
        console.log(this.responseText);
        }
        else{
            console.log('Some error occured');
        }
    }
    // Send the request
    params=`{"name":"test","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log('We are Done');
}
let popBtn=document.getElementById('popBtn');
popBtn.addEventListener('click',popHandler);

function popHandler(){
    console.log('You have clicked the PopHandler');

    // Instantiate an xhr Object
    const xhr=new XMLHttpRequest();

    // Open the Object
    xhr.open('GET','https://jsonplaceholder.typicode.com/todos',true);


    xhr.getResponseHeader('Content-type','application/json');

    // What to do when response is ready
    xhr.onload=function(){
        if(this.status===200){
            let obj=JSON.parse(this.responseText);
            console.log(obj);
            let list=document.getElementById('list');
            str="";
            for(key in obj){
                str+=`<li>${obj[key].title}</li>`;
            }
        list.innerHTML=str;
        }
        else{
            console.log('Some error occured');
        }
    }

    xhr.send();

    console.log('We are Done');
}