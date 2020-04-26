//let's hit 
function rpsGame(yourChoise){

humanChoise = yourChoise.id;

botChoise = numberToChoise(randToRpsInt());


result = decideWinner(humanChoise, botChoise);


message = finalMessage(result); //{'message':'you win' ,'color':'green' }

rpsFronEnd(yourChoise.id , message , botChoise);

}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}
function numberToChoise(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(humanChoise , botChoise){
    var rpsDataBase = {
        'rock': {'scissors':1 , 'rock':0.5 , 'paper':0},
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 },
    };
    var yourSource = rpsDataBase[humanChoise][botChoise];
    return yourSource;
}


function finalMessage(yourChoise){

    if (yourChoise===0){
        return {'message':'you lost !', 'color':'red'};
    }
    else if (yourChoise===0.5){
        return { 'message': 'you Tied !', 'color': 'Yellow' };
    }
    else {
        return { 'message': 'you won !', 'color': 'green' };
    }
}


function rpsFronEnd(humanImageChoise, finalMessage, botImageChoise){

    var imageDataBase ={
        'rock':document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src, 
    };

    //remove all elements
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv =  document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDataBase[humanImageChoise] 
                +"' height=150 width=150 style='box-shadow: 0px,10px,50px rgba(37, 50, 233, 1);'>";

    messageDiv.innerHTML = "<h1 style='color: "+ finalMessage['color'] + ";"+"font-size: 60px; padding:30px;'>"+
                            finalMessage['message']+"</h1>";

    botDiv.innerHTML = "<img src='" + imageDataBase[botImageChoise]
        + "' height=150 width=150 style='box-shadow: 0px,10px,50px rgba(243, 38, 24, 1);'>";
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

function Repeate(){
    location.reload();
}