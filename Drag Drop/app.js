const draggableList=document.getElementById('draggable-list');
const check=document.getElementById('check');

const topBatsman=[
        'Joe Root',
    	'Steve Smith ',
    	'Kane Williamson',
    	'Marnus Labuschagne',
    	'Rohit Sharma',
    	'Virat Kohli',
    	'Dimuth Karunaratne',		
    	'Babar Azam',
    	'Tom Latham',
    	'David Warner'
];

//Store list items 
const listItems=[];

let dragStartIndex;

createList();

// insert list items into DOM
function createList(){
    [...topBatsman].map(a=>({value:a,sort:Math.random()}))
    .sort((a,b)=>a.sort-b.sort)
    .map(a=>a.value)
    .forEach((person,index)=>{
        const listItem=document.createElement('li');
        listItem.setAttribute('data-index',index);

        listItem.innerHTML=`
        <span class="number">${index+1}</span>
        <div class="draggable" draggable="true">
        <p class="person-name">${person}</p>
        <i class="fas fa-grip-lines"></i>
        </div>`;
        listItems.push(listItem);

        draggableList.appendChild(listItem)
    })
}