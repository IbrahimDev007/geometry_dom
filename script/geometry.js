// <!-- triangle start here  -->


document.getElementById('triangle-button').addEventListener("click", function (event) {

     const length = parseFloat(document.getElementById('triangle-length').value);
     const length2 =parseFloat( document.getElementById('triangle-length2').value);
     console.log(event.target.parentNode)
     validation(length, length2);
     let Area = .5 * geomatryArea(length, length2);
      Area=Area.toFixed(2);
      console.log(Area);
     tableAdd('Trangle',Area);
     document.getElementById('triangle-length2').value=''
     document.getElementById('triangle-length').value=''
 })

//  <!-- Rectangle start here -->
document.getElementById('rectangle-button').addEventListener("click", function (event) {

     const length = parseFloat(document.getElementById('rectangle-length').value);
     const length2 =parseFloat( document.getElementById('rectangle-length2').value);
     console.log(event.target.parentNode)
     validation(length, length2);
     let Area = geomatryArea(length, length2);
      Area=Area.toFixed(2);
      console.log(Area);
     tableAdd('Rectangle',Area);
     document.getElementById('rectangle-length2').value=''
     document.getElementById('rectangle-length').value=''
 })
// <!-- Parallelogram -->
document.getElementById('parallelogram-button').addEventListener("click", function (event) {

     const length = parseFloat(document.getElementById('parallelogram-length').value);
     const length2 =parseFloat( document.getElementById('parallelogram-length2').value);
     console.log(event.target.parentNode)
     validation(length, length2);
     let Area =  geomatryArea(length, length2);
      Area=Area.toFixed(2);
      console.log(Area);
     tableAdd('Parallelogram',Area);
     document.getElementById('parallelogram-length2').value=''
     document.getElementById('parallelogram-length').value=''
 })
// <!-- Rhombus  -->
document.getElementById('rhombus-button').addEventListener("click", function (event) {

     const length = parseFloat(document.getElementById('rhombus-length').value);
     const length2 =parseFloat( document.getElementById('rhombus-length2').value);
     console.log(event.target.parentNode)
     validation(length, length2);
     let Area = .5 * geomatryArea(length, length2);
      Area=Area.toFixed(2);
      console.log(Area);
     tableAdd('Rhombus',Area);
     document.getElementById('rhombus-length2').value=''
     document.getElementById('rhombus-length').value=''
 })
// <!-- Pentagon  -->
document.getElementById('pentagon-button').addEventListener("click", function (event) {

     const length = parseFloat(document.getElementById('pentagon-length').value);
     const length2 =parseFloat( document.getElementById('pentagon-length2').value);
     console.log(event.target.parentNode)
     validation(length, length2);
     let Area = .5 * geomatryArea(length, length2);
      Area=Area.toFixed(2);
      console.log(Area);
     tableAdd('Pentagon',Area);
     document.getElementById('pentagon-length2').value=''
     document.getElementById('pentagon-length').value=''
 })
// <!-- Ellipse -->
document.getElementById('ellipse-button').addEventListener("click", function (event) {

     const length = parseFloat(document.getElementById('ellipse-length').value);
     const length2 =parseFloat( document.getElementById('ellipse-length2').value);
     console.log(event.target.parentNode)
     validation(length, length2);
     let Area = 3.142 * geomatryArea(length, length2);
      Area=Area.toFixed(2);
      console.log(Area);
     tableAdd('Ellipse',Area);
     document.getElementById('ellipse-length2').value=''
     document.getElementById('ellipse-length').value=''
 })



 
