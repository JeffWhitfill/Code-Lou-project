//var theboxArray = [
//    'Stand with legs shoukder-width apart',
//    'Bring left leg in and salute (left hand flat on top of your right fist',
 //   'Return to staning with legs shoukder-width apart, weight balanced between both legs',
//    'Bring both arms up, keeping a head-width distance between them and bring in to a foot distance in front of your chest',
//    'Take three deep breaths',
 //   'Shift your weight to your right leg',
//    'Wave hands like clouds three times to the left, stepping left as you go',
//    'Bring hands in front of chest again and take one breath',
 //   'Place box down by left hip, on an imaginary tablre, and then slide it to the right side and then off the table',
//    'Raise hands diagonally, by left shoulder and then usher the box out the window, turning your right hip as you go',
 //   'Bring hands in front of chest again and take one breath',
//    'Perform steps 9 and 10 again but begin with putting the box by your right hip (replace left with right and vice-versa)',
//    'Shift your weight to your left leg',
//    'Wave hands like clouds three times to the right, stepping right as you go',
//    'Take three deep breaths',
//    'Let arms fall to your sides',
//    'Bring left leg in and salute (left hand flat on top of your right fist',
 //   'Return to staning with legs shoukder-width apart, weight balanced between both legs'
//]

//function boxReveal(buttonid, listclass) {//alert(buttonid+' '+listclass);
//  var x = document.getElementsByClassName(listclass); 
function boxReveal () {
//    var i = 0;
    var x= document.getElementById('itema');
//   for (i=0; i < x.length; i += 1) {
    if (x.style.display = "none") { 
        x.style.display = "block";
   }
        document.getElementById('boxsteps').style.display = "none";
}

function sixteenReveal () {
    //    var i = 0;
        var x= document.getElementById('itemb');
    //   for (i=0; i < x.length; i += 1) {
        if (x.style.display = "none") { 
            x.style.display = "block";
       }
            document.getElementById('sixteenSteps').style.display = "none";
    }


///function sixteenReveal() {
   // var x = document.getElementsByClassName("itemb"); 
   // var j = 0;

    //for (j=0; j < x.length; j += 1) {
    //    x.style.display = "none";
    //    x.style.display = "block";
   // }   
    //    button.style.display = "none";
//}

//function boxReveal(buttonid, listid)
//{
//if (document.getElementById('itema').classList.contains("hide"))
//document.getElementById("itema").classList.add('show');
//document.getElementById("boxsteps").style.display = "none";
//document.getElementById("itema").classList.add('show');
//document.getElementById("itema").classList.remove('hide');
//if ( document.getElementById("itema").classList.contains('show') )
//document.getElementById("boxsteps").classList.toggle('hide');
//}