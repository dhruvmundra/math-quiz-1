function addUser(){
    player1_name=document.getElementById("player1_input").value;
    player2_name=document.getElementById("player2_input").value;

    localStorage.setItem("player1_LS",player1_name);
    localStorage.setItem("player2_LS",player2_name);

    window.location="game_page.html"
}
