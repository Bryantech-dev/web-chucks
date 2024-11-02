const H = document.getElementById("hour")
const M = document.getElementById("minuts")
const S = document.getElementById("seconds")


timer()

function timer (){
   var date = new Date;
   H.innerText=date.getHours()
   M.innerText=date.getMinutes()
   S.innerText=date.getSeconds()

   S.classList.toggle("col")



   setTimeout(()=>{
      timer()
   },1000)
}



