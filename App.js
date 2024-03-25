const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const Close = document.getElementById('close')
// if(bar){
// bar.addEventListener('click',()=>{
//     nav.classList.add('active')
  
// })}
//    if(Close){
//     Close.addEventListener('click',()=>{
//         // console.log('button clicked')
//         nav.classList.remove('active')
//     })
// }
const ind_itm = document.querySelectorAll('.items') 
function index_items(){
    for(let index of ind_itm){
        index.addEventListener('click',()=>{
            window.location.href = ('shop.html')
        })
    }
}
index_items()
