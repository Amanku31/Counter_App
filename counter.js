document.getElementById('value');

var count=0;
function add () {
   count++;
   value.innerHTML = count;
  
    console.log(count);
}
function sub () {
  
   count--;
   value.innerHTML = count;
    console.log(count);
}
function reset(){
    count =0 ;
    value.innerHTML=count;
}