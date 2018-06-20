var theboxArray = [
    'Stand with legs shoukder-width apart',
    'Bring left leg in and salute (left hand flat on top of your right fist',
    'Return to staning with legs shoukder-width apart, weight balanced between both legs',
    'Bring both arms up, keeping a head-width distance between them and bring in to a foot distance in front of your chest',
    'Take three deep breaths',
    'Shift your weight to your right leg',
    'Wave hands like clouds three times to the left, stepping left as you go',
    'Bring hands in front of chest again and take one breath',
    'Place box down by left hip, on an imaginary tablre, and then slide it to the right side and then off the table',
    'Raise hands diagonally, by left shoulder and then usher the box out the window, turning your right hip as you go',
    'Bring hands in front of chest again and take one breath',
    'Perform steps 9 and 10 again but begin with putting the box by your right hip (replace left with right and vice-versa)',
    'Shift your weight to your left leg',
    'Wave hands like clouds three times to the right, stepping right as you go',
    'Take three deep breaths',
    'Let arms fall to your sides',
    'Bring left leg in and salute (left hand flat on top of your right fist',
    'Return to staning with legs shoukder-width apart, weight balanced between both legs'
]

var button = document.createElement("button");
button.innerHTML = "Show Instructions";

//var div = document.getElementsById("thebox")[0];
//div.appendChild(button);

button.addEventListener ("click", function() {
    document.write("<h4>The Box Form by Dr.Paul Lam</h4>");
    var list = document.createElement('ol');
    for (var i=0, i < theboxArray.length, i += 1) {
        //create list item //
        var item = document.createElement('li');
        //connect instruction to array item//
        item.appendChild(document.createTextNode(theboxArray[i]));
        // add new item to array//
        list.appendChild(item);
       }
  });

  function eraseText() {
      document.getElementById('thebox').value ="";
  }
