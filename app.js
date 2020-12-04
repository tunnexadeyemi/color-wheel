// document.querySelectorAll('li');
// const allLis = document.querySelectorAll('li');
// const colors = ['red','orange', 'yellow' , 'green', 'blue', 'purple']


// // for (let i=0; i<allLis.length; i++){
// //     console.log(allLis[i].innerText ='we are the champions');
// // }

// for(let li of allLis){li.innerHTML= 'we are the champions'}


// allLis.forEach((li, i)=>{
//     const color = colors[i];
//     li.style.color=color;
// })


// // const btn= document.querySelector("#clicker");

// // // btn.onclick =function(){console.log('you clicked me!');
// // // }

// // btn.ondblclick= function(){
// //     console.log('you clicked me twice!');
// // }


//  const btn =document.querySelector('button');

//  btn.addEventListener('click', function(){
//      alert('clicked!!!');
// });

// btn.addEventListener('click', function(){
//     console.log('second thing!!!');
// });

// btn.addEventListener('mouseover', function(){
// btn.innerText ='stop touching me'
// });


// btn.addEventListener('mouseout', function(){
//     btn.innerText ='click me down'
//     });

// const btn = document.querySelector('button');

// btn.addEventListener('mouseover', function(){
//     console.log('moused over me!!!');


// const height = Math.floor(Math.random() * window.innerHeight);
// const width = Math.floor( Math.random() * window.innerWidth);
// btn.style.left =`${height}px`;
// btn.style.top =`${width}px`;
// });

// btn.addEventListener('click',function(){
//     btn.innerText ='You got me';
//     document.body.style.backgroundColor ='green'
// });

////===============================

const colors =[
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'indigo',
    'violet'
];
const changeColor = function(){
const h1=document.querySelector('h1');
h1.style.color = this.style.backgroundColor;
}
const container =document.querySelector('#boxes');

for(let color of colors){
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('click', changeColor);
}
   

// const input = document.querySelector('#username');
// input.addEventListener('keydown',function(e){
// console.log('KEY DOWN!');
// });


// input.addEventListener('keyup', function(e){
//     console.log('KEYUP!!');
// }); 

// const addItemInput =document.querySelector('#additem');
// const itemsUL = document.querySelector("#items");

// addItemInput.addEventListener('keypress', function(e) {
//  if(e.key === 'Enter'){
//      if(!this.value)return;
//      //add a new item to list
//      console.log(this.value);
 
// const newItemText = this.value;
// const newItem = document.createElement('li');
// newItem.innerText = newItemText;
// itemsUL.appendChild(newItem);
// this.value ='';
//  }
// });




 