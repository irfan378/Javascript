// data is array of objects which contains about the candidates
const data=[
    {
        name:'person1',
        age:20,
        city:'kolkata',
        language:'python',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name:'person2',
        age:28,
        city:'Banglore',
        language:'javascript',
        framework:'Angular',
        image:'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
        name:'person3',
        age:20,
        city:'kolkata',
        language:'python',
        framework:'flask',
        image:'https://randomuser.me/api/portraits/men/77.jpg'
    },
    {
        name:'person4',
        age:20,
        city:'kolkata',
        language:'javascript',
        framework:'react js',
        image:'https://randomuser.me/api/portraits/men/78.jpg'
    }
]

// CV iterator
function cvIterator(profiles){
    let nextIndex=0;
    return{
        next:function(){
            return nextIndex<profiles.length?
            {value:profiles[nextIndex++],done:false}:
            {done:true}
        }
    };
}
const candidates=cvIterator(data);
// Button listener for next button
const next=document.getElementById('next');
next.addEventListener('click',nextCV);
nextCV();

function nextCV(){
    const currentCandidate=candidates.next().value;
    let image=document.getElementById('image');
    let profile=document.getElementById('profile');
    if (currentCandidate!=undefined) {
        
        image.innerHTML=`<img src='${currentCandidate.image}'>`;
    
        profile.innerHTML=`<ul class="list-group">
        <li class="list-group-item">${currentCandidate.name}</li>
        <li class="list-group-item">${currentCandidate.age} years old</li>
        <li class="list-group-item">Lives in ${currentCandidate.city}</li>
        <li class="list-group-item">primarly works on ${currentCandidate.language}</li>
        <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
        
      </ul>`;
    }
    else{
        alert('End of candidate Applications');
        window.location.reload();
    }
}