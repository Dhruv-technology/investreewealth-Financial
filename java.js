var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
	var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
function validation(){
var phone-document.forms['myfrm' I'mobileno'];
var get_num=String(phone.value).charAt(e); var first_num=Number(get_num);
if(isNaN(phone.value){
   || phone.value. lengthl-10 || first_num(6)
alert('Invalid Phone Number'); return false;
return true;
}
function Java(){
alert('Your phonenumber has been saved you may contact investree wealth for swift and rapid investments')
}