player1_name=localStorage.getItem("player1_LS");
player2_name=localStorage.getItem("player2_LS");

P1_score=0;
P2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

var correct_answer=0;

document.getElementById("player1_score").innerHTML=P1_score;
document.getElementById("player2_score").innerHTML=P2_score;

document.getElementById("player_question").innerHTML="Question turn - "+ player1_name;
document.getElementById("player_answer").innerHTML="Answer turn - "+ player2_name;

function send(){
    number1=document.getElementById("Number1").value;
    number2=document.getElementById("Number2").value;
    correct_answer=parseInt(number1)*parseInt(number2);

    quest_tag="<h4>"+number1+" X "+ number2+"</h4>";
    input_box="<br> Answer :<input type='text' id='input_answer'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>check </button>"
    row=quest_tag+input_box+check_button;
    document.getElementById("output").innerHTML=row
    document.getElementById("Number1").value="";

    document.getElementById("Number2").value="";
}
var quest_turn="player1";
var answer_turn="player2";

function check(){
    console.log("cheackcalled");
get_answer=document.getElementById("input_answer").value;
console.log("ca"+ correct_answer)
console.log("ga"+ get_answer)
if(get_answer==correct_answer){
    console.log("CORRECT ANSWER!!!"+correct_answer)
    if(answer_turn=="player1"){
        P1_score=P1_score+1;
        document.getElementById("player1_score").innerHTML=P1_score;
    }
    else{
        P2_score=P2_score+1;
        document.getElementById("player2_score").innerHTML=P2_score;
    }
}
if(quest_turn=="player1"){
    quest_turn="player2";
    answer_turn="player1";
    document.getElementById("player_question").innerHTML="Question turn - "+ player2_name;
document.getElementById("player_answer").innerHTML="Answer turn - "+ player1_name;

}
else{
    quest_turn="player1";
    answer_turn="player2";
    document.getElementById("player_question").innerHTML="Question turn - "+ player1_name;
document.getElementById("player_answer").innerHTML="Answer turn - "+ player2_name; 
}
document.getElementById("output").innerHTML="";

}