let aleatorio = Math.floor(Math.random()*100)


function guess(){
    palpite = parseInt(document.getElementById('escolha').value);



 if (palpite == aleatorio){
          document.getElementById("resultado").innerHTML = "Correto!";
          document.getElementById("container").style.setProperty("background-color", "green")
           
    }
    else if (palpite < aleatorio){
         document.getElementById("resultado").innerHTML = "Maior!";
         document.getElementById("container").style.setProperty("background-color", "red")
    }

     else {
        document.getElementById("resultado").innerHTML = "Menor!";
        document.getElementById("container").style.setProperty("background-color", "red")
     }
}

function resetar(){
    aleatorio = Math.floor(Math.random()*100)
    document.getElementById("resultado").innerHTML=""
    document.getElementById("escolha").value=""
}
    
