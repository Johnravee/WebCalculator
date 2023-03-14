const dis = document.querySelector(".display");
const btn = document.querySelector(".btn")

 btn.addEventListener('click',(e)=>{
     
    //*Display a value of click btn
    let btnClick = e.target.value
    
    //*Pass the value of any button that clicked
    dis.append(btnClick)
    
 })

 document.querySelector(".equal").addEventListener("click",()=>{ 
   //*Tested for posibble errors
   try{
     //*evaluate the number input in display
     let result = eval(dis.innerHTML)

      //*display result 
     dis.innerHTML = result

     //*No display
    if(dis.innerHTML === "undefined") dis.innerHTML = ""

    //*Any Error Produce will pass to err
   }catch(err){
    alert("Error")
   } 
 })

 document.querySelector(".back").addEventListener("click", ()=>{
    //*store the value of display to a variable
   let str = dis.innerHTML

   //*display updated value na nabawasan na.
   dis.innerHTML = str.substring(0,str.length - 1)

})

//* Delete all display
 document.querySelector(".del").addEventListener("click",()=>{
       dis.innerHTML = ""
})