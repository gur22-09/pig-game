/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score,roundScore,activePlayer,gamePlaying,prevDice,gameScore;

iniTialize();





document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(gamePlaying){
    var dice=Math.floor(Math.random()*6)+1;
        
        
        
    //display the random number
    var diceDOM=document.querySelector('.dice-'+activePlayer);
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';
    
    //update the score if the dice rolls 1 or round up the score
    if(prevDice==6&&dice==6){
        score[activePlayer]=0;
        document.querySelector('#score-'+activePlayer).textContent='0';
        nextPlayer();
        
    }    
    else if(dice!==1){
        //add the score and display the round score
        roundScore +=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
    }
     
   else{
       nextPlayer();
   }
        prevDice=dice;
        
    }

    })

document.querySelector('.btn-hold').addEventListener('click',function(){
    //first update curr score to global
    if(gamePlaying){
    score[activePlayer] +=roundScore;
    document.querySelector('#score-'+activePlayer).textContent=score[activePlayer];
    //update UI
    
        var input = document.querySelector('.final-score').value;
        console.log(input);
    //undefined, null,"empty string", are defined as falsy values
        if(input){
            gameScore=input;
        }
        else{
            gameScore=100;
        }
        
       
    //check if player has wont the game
    if(score[activePlayer]>=gameScore){
        document.querySelector('#name-'+activePlayer).textContent='winner !';
        document.querySelector('.dice-0').style.display='none';
         document.querySelector('.dice-1').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
         document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
         gamePlaying=false;
    
    }
    else{
        nextPlayer();
    }
    }
    
})

function nextPlayer(){
    activePlayer===0?activePlayer=1:activePlayer=0;
        roundScore=0;
        
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        
      
}
document.querySelector('.btn-new').addEventListener('click',iniTialize);




function iniTialize(){
    
    score=[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlaying=true;
    document.querySelector('.dice-0').style.display='none';
      document.querySelector('.dice-1').style.display='none';

document.getElementById('score-0').textContent='0';

document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
    document.querySelector('#name-0').textContent='Player 1';
     document.querySelector('#name-1').textContent='Player 2';
     document.querySelector('.player-0-panel').classList.remove('winner');
       document.querySelector('.player-1-panel').classList.remove('winner');
         document.querySelector('.player-0-panel').classList.remove('active');
       document.querySelector('.player-1-panel').classList.remove('active');
         document.querySelector('.player-0-panel').classList.add('active');
       
        
    
    
    
}




    
