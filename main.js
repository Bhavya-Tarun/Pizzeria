var pizza_menu=[];
var recadd=documemt.getElementById("Reccomendations_input").Value;
function Submit_show(){
    document.getElementById("Thanks").style.display="inline-block";
    pizza_menu.push(recadd);
    document.getElementById("pizzaadd").innerHTML=pizza_menu;
}