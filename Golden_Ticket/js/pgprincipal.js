
// function comSta(){
// const x=document.getElementById("s").value;
// valol=100000*x;
// comSta.preventDefault();
// if(x<=0){
   // alert("Compra no realizada")
// 
   // return;
// }else{
// document.getElementById("text").innerHTML=valol;
// alert("Su compra se ha realizado correctamente..");
// alert("El numero de boletas que compro son " + x + "y el valor de las boletas son" + valol); 
// };
// return;
// 

// };
function comSta(){
   const x=document.getElementById("s").value;
   valol=100000*x;
   if(x<=0){
      alert("Error de compra")
   }else{
   // document.getElementById("text").innerHTML=valol;
   alert("El tipo de boleta es NORMAL, el numero de boletas que compro son " + x + " y el valor de las boletas son " + valol) 
   alert("Compra realizada con exito")
   }
   
   };

   function vipRes(){
      const x=document.getElementById("z").value;
      valon=200000*x;
      if(x<=0){
         alert("Error de compra")
      }else{
      // document.getElementById("text").innerHTML=valol;
      alert("El tipo de boleta VIP, el numero de boletas que compro son " + x + " y el valor de las boletas son " + valon) 
      alert("Compra realizada con exito")
      }
      
      };
   


// window.addEventListener("keydown",(e)=>{
   // if(e.key=="Enter"){
      // comSta();
      // e.preventDefault();
      // return;
   // }
// }
// 
// )
// ;
