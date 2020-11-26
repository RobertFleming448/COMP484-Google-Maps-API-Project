const oviatt = document.querySelector("#oviatt");
const plaza = document.querySelector("#plaza");
const prof = document.querySelector("#prof");
const pond = document.querySelector("#pond");
const glenn = document.querySelector("#glenn");

const cover = document.querySelector("#cover");     //covers the map so the user cant see which items are selectable
const begin = document.querySelector("#start");     //start button

const change = document.querySelector("#changeMap");

var questionNum=0;  //tracks current question status
var correct=0;  //counts how many user has gotten correct

//dbclick event from https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event

oviatt.addEventListener("dblclick", oviattCheck); //listen for double click on oviatt
plaza.addEventListener("dblclick", plazaCheck); //listen for double click on plaza
prof.addEventListener("dblclick", profCheck); //listen for double click on prof
pond.addEventListener("dblclick", pondCheck); //listen for double click on pond
glenn.addEventListener("dblclick", glennCheck); //listen for double click on glenn

cover.addEventListener("dblclick", wrong);  //listen for double click on everything except answers
begin.addEventListener("click", startGame); //listen for click on start button start the game

begin.addEventListener("click", startTimer);  //listen for click on start button start the timer

change.addEventListener("click", swapMap); //listen for click on start button start the game

function oviattCheck()  //runs if oviatt library is pressed, if not the current quesiton being asked answer is incorrect go to incorrect function; if is correct go to correct function
{
  if(running===false) //prevent clicking if game is not actively running
  {
    return;
  }
  if(questionNum===1) //if clicked on the right question correct else incorrect
  {
      right();
  }
  else
  {
      wrong();
  }
}

function plazaCheck() //runs if plaza del sol is pressed, if not the current quesiton being asked answer is incorrect go to incorrect function; if is correct go to correct function
{
  if(running===false) //prevent clicking if game is not actively running
  {
    return;
  }
  if(questionNum===2) //if clicked on the right question correct else incorrect
  {
    right();
  }
  else
  {
      wrong();
  }
}

function profCheck()  //runs if prof is pressed, if not the current quesiton being asked answer is incorrect go to incorrect function; if is correct go to correct function
{
  if(running===false) //prevent clicking if game is not actively running
  {
    return;
  }
  if(questionNum===3) //if clicked on the right question correct else incorrect
  {
    right();
  }
  else
  {
      wrong();
  }
}

function pondCheck()  //runs if duck pond is pressed, if not the current quesiton being asked answer is incorrect go to incorrect function; if is correct go to correct function
{
  if(running===false) //prevent clicking if game is not actively running
  {
    return;
  }
  if(questionNum===4) //if clicked on the right question correct else incorrect
  {
    right();
  }
  else
  {
      wrong();
  }
}

function glennCheck() //runs if glenn Omatsu house is pressed, if not the current quesiton being asked answer is incorrect go to incorrect function; if is correct go to correct function
{
  if(running===false) //prevent clicking if game is not actively running
  {
    return;
  }
  if(questionNum===5) //if clicked on the right question correct else incorrect
  {
    right();
  }
  else
  {
      wrong();
  }
}

function revealNextQ()  //reveals the current answer's status and the next quesiton based on the state of questionNum
{
  questionNum++;
  switch(questionNum)  //switch syntax found here: https://www.w3schools.com/js/js_switch.asp
  {
    case 1:
    $("#question1").removeClass("invisible"); //reveal question 1
    break;

    case 2:
    $("#question2").removeClass("invisible"); //reveal question 2
    $("#result1").removeClass("invisible");   //reveal question 1 answer
    break;

    case 3:
    $("#question3").removeClass("invisible"); //reveal question 3
    $("#result2").removeClass("invisible");   //reveal question 2 answer
    break;

    case 4:
    $("#question4").removeClass("invisible"); //reveal question 4
    $("#result3").removeClass("invisible");   //reveal question 3 answer
    break;

    case 5:
    $("#question5").removeClass("invisible"); //reveal question 5
    $("#result4").removeClass("invisible");   //reveal question 4 answer
    break;

    default:
    $("#result5").removeClass("invisible");   //reveal question 5 answer
    break;
  }
}

function startGame()  //begins the game by revealing the first problem and hiding start button
{
  if(running===false) //game can only start once
  {
    running=true;
    document.getElementById("start").classList.add('invisible');
    revealNextQ();
  }
}
function right()  //if answer is correct this function runs, prints the correct status on the result line and adds to the correct answer count
{
  correct++;
  switch(questionNum) //switch syntax found here: https://www.w3schools.com/js/js_switch.asp
  {
    case 1:   //add correct style to map selector and problem status
    document.getElementById("oviatt").classList.add('correct');
    document.getElementById("result1").innerHTML="<h2>You Know Your Stuff!</h2>";
    document.getElementById("result1").classList.add('rightText');
    revealNextQ();

    break;

    case 2:   //add correct style to map selector and problem status
    document.getElementById("plaza").classList.add('correct');
    document.getElementById("result2").innerHTML="<h2>You Know Your Stuff!</h2>";
    document.getElementById("result2").classList.add('rightText');
    revealNextQ();
    break;

    case 3:   //add correct style to map selector and problem status
    document.getElementById("prof").classList.add('correct');
    document.getElementById("result3").innerHTML="<h2>You Know Your Stuff!</h2>";
    document.getElementById("result3").classList.add('rightText');
    revealNextQ();
    break;

    case 4:   //add correct style to map selector and problem status
    document.getElementById("pond").classList.add('correct');
    document.getElementById("result4").innerHTML="<h2>You Know Your Stuff!</h2>";
    document.getElementById("result4").classList.add('rightText');
    revealNextQ();
    break;

    case 5:   //add correct style to map selector and problem status
    document.getElementById("glenn").classList.add('correct');
    document.getElementById("result5").innerHTML="<h2>You Know Your Stuff!</h2>";
    document.getElementById("result5").classList.add('rightText');
    revealNextQ();
    finish();
    break;

    default:
    break;
  }
}
function wrong()  //if answer is incorrect this function runs, prints the incorrect status on the result line
{
  if(running===false)
  {
    return;
  }
  switch(questionNum) //switch syntax found here: https://www.w3schools.com/js/js_switch.asp
  {
    case 1:   //add incorrect style to map selector and problem status
    document.getElementById("oviatt").classList.add('incorrect');
    document.getElementById("result1").innerHTML="<h2>WRONG!</h2>";
    document.getElementById("result1").classList.add('wrongText');
    revealNextQ();

    break;

    case 2:   //add incorrect style to map selector and problem status
    document.getElementById("plaza").classList.add('incorrect');
    document.getElementById("result2").innerHTML="<h2>WRONG!</h2>";
    document.getElementById("result2").classList.add('wrongText');
    revealNextQ();
    break;

    case 3:   //add incorrect style to map selector and problem status
    document.getElementById("prof").classList.add('incorrect');
    document.getElementById("result3").innerHTML="<h2>WRONG!</h2>";
    document.getElementById("result3").classList.add('wrongText');
    revealNextQ();
    break;

    case 4:   //add incorrect style to map selector and problem status
    document.getElementById("pond").classList.add('incorrect');
    document.getElementById("result4").innerHTML="<h2>WRONG!</h2>";
    document.getElementById("result4").classList.add('wrongText');
    revealNextQ();
    break;

    case 5:   //add incorrect style to map selector and problem status
    document.getElementById("glenn").classList.add('incorrect');
    document.getElementById("result5").innerHTML="<h2>WRONG!</h2>";
    document.getElementById("result5").classList.add('wrongText');
    revealNextQ();
    finish();
    break;

    default:
    break;
  }
}
function finish() //runs after the fifth answer is submitted, reveals the final status with message based on how many user got correct/incorrect
{
  window.clearInterval(interval); //stop timer
  if(correct===0)
  {
    document.getElementById("results").innerHTML=
    "<p>You Got "+correct+" Correct and "+(5-correct)+" Incorrect</p><p>In "+format(total)+"</p><p>Are you a freshman or something?</p>";
  }
  else if(correct===1)
  {
    document.getElementById("results").innerHTML=
    "<p>You Got "+correct+" Correct and "+(5-correct)+" Incorrect</p><p>In "+format(total)+"</p><p>How did you find your classes?</p>";
  }
  else if(correct===2)
  {
    document.getElementById("results").innerHTML=
    "<p>You Got "+correct+" Correct and "+(5-correct)+" Incorrect</p><p>In "+format(total)+"</p><p>Pfft, Sophmore level...</p>";
  }
  else if(correct===3)
  {
    document.getElementById("results").innerHTML=
    "<p>You Got "+correct+" Correct and "+(5-correct)+" Incorrect</p><p>In "+format(total)+"</p><p>Looks like you forgot</p><p>the campus during Covid</p>";
  }
  else if(correct===4)
  {
    document.getElementById("results").innerHTML=
    "<p>You Got "+correct+" Correct and "+(5-correct)+" Incorrect</p><p>In "+format(total)+"</p><p>Pretty Good, Senior Level!</p>";
  }
  else if(correct===5)
  {
    document.getElementById("results").innerHTML=
    "<p>You Got "+correct+" Correct and "+(5-correct)+" Incorrect</p><p>In "+format(total)+"</p><p>How did you know where the </p><p>Glenn Omatsu house is? Legendary!</p>";
  }
  $("#results").removeClass("invisible");
}
