let sinupp=document.getElementById('sinupp');
console.log(sinupp);
sinupp.addEventListener('click',(e)=>{
  e.preventDefault();
let password=document.getElementById('password').value
let username=document.getElementById('username').value

if( username!==''&& password!==''){
  window.alert('login succesfully');
  window.open('./index.html');

}else{
  window.alert("login fails")
}
})

