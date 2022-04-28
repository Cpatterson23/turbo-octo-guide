/**
 * @type{HTMLCanvasElement}
 */
 const canvas = document.getElementById("my-canvas");
 const ctx = canvas.getContext("2d");
 
 
 
 let ctrl = draw
 
 /**
  * 
  * @param {MouseEvent} event 
  */
 function draw(event) {
     if (event.ctrlKey) {
         ctx.fillRect(event.offsetX,event.offsetY,5,5);
     }else {
         
     }
 
 }
 
 canvas.addEventListener("mousemove",draw);