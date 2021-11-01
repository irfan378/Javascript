const clearBtn=document.querySelector('.clear-tasks');
const card=document.querySelector('.card');
const heading=document.querySelector('h5');

// Click
// clearBtn.addEventListener('click',runEvent);
// Double Click
// clearBtn.addEventListener('dblclick',runEvent);
// MouseDown
// clearBtn.addEventListener('mousedown',runEvent);
// MouseUp
// clearBtn.addEventListener('mouseup',runEvent);
// Mouseenter
// card.addEventListener('mouseenter',runEvent);
// // Mouseleave
// card.addEventListener('mouseleave',runEvent);
// // Mouseover
// card.addEventListener('mouseover',runEvent);
// // Mouseout
// card.addEventListener('mouseout',runEvent);
// Mousemove
card.addEventListener('mousemove',runEvent);
// Event Handler
function runEvent(e){
    console.log(`Event Type: ${e.type}`);
    e.preventDefault();
    heading.textContent=`MouseX:${e.offsetX} Mousey:${e.offsetY}`;
    document.body.style.background=`rgb(${e.offsetX},${e.offsetY},40)`
}