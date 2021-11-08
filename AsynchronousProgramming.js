console.log("This is asynchronous programming");

setTimeout(()=>{
    for (let index = 0; index < 4005; index++) {
        const element = index;
        console.log('This is index numeber' + index);
    }
},100);
console.log('Done printing...')