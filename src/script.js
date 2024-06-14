//Guess Button
document.getElementById("guess").onclick=function(){
    var randNum=Math.floor(Math.random()*5)+1;
    var guessedNum1=document.getElementById("guessedNum").value;

    if(guessedNum1<6&&guessedNum1>=0){
        if(0==guessedNum1){
        document.getElementById("answer").innerHTML="Input can not be null!"
        }

        else if(randNum==guessedNum1){
        document.getElementById("answer").innerHTML="Congratulations! You won"
        }
        else{
        document.getElementById("answer").innerHTML="I guess "+randNum+". Try again!"
        };

        setTimeout(function(){document.getElementById("answer").innerHTML="";},2000);
        setTimeout(function(){document.getElementById("guessedNum").value="";},1000);

    }else{
        document.getElementById("answer").innerHTML="Input a number between 0-5!"
        setTimeout(function(){document.getElementById("answer").innerHTML="";},2000);
        setTimeout(function(){document.getElementById("guessedNum").value="";},1000);
        }
}

//Clear Button
document.getElementById("clear").onclick=function(){ 
document.getElementById('guessedNum').value="";
}