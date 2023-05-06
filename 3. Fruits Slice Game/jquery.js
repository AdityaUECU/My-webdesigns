var playing = false;
var score;
var trialLeft;
var step;
var action;
var fruits = ['apple' , 'banana', 'blackberry', 'mango', 'straw', 'lemon', 'orange', 'pineapple', 'cherry', 'peach'];
$(function(){ 
    $("#startreset").click(function(){
        if(playing == true){
            location.reload();
        }else{
            playing = true;
            score = 0;
            $("#scorevalue").html(score);

            $("#trialLeft").show();
            trialLeft = 3;
            addheart();
            $("#gameover").hide();


            $("#startreset").html("Reset Game");

            startAction();

        }
    });

    $("#fruit1").mouseover(function(){
        score ++;
        $("#scorevalue").html(score);
        document.getElementById("slicesound").play();
        clearInterval(action);
        $("#fruit1").hide("explode", 500);
        setTimeout(startAction, 500);
    });



function addheart(){
    $("#trialLeft").empty();
    for(i = 0; i < trialLeft; i++){
        $("#trialLeft").append('<img src="images/heart.png" class="life">');

    }
}

function startAction(){
    $("#fruit1").show();
    chooseFruit();
    $("#fruit1").css({'left' : Math.round(500*Math.random()), 'top' : -50});

    step = 1 + Math.round(5*Math.random());

    action = setInterval(function(){
        $("#fruit1").css('top', $("#fruit1").position().top + step);

        if( $("#fruit1").position().top >  $("#holder").height()){
            if(trialLeft > 1){
                $("#fruit1").show();
                  chooseFruit();
                   $("#fruit1").css({'left' : Math.round(500*Math.random()), 'top' : -50});

              step = 1 + Math.round(5*Math.random());
              trialLeft --;
              addheart();
            }else{
                playing = false;
                $("#startreset").html("Start Game");
                $("#gameover").show();
                $("#gameover").html('<p>Game over!</p><p>Your Score is ' + score +'</p>');
                $("#trialLeft").hide();


                stopAction();
            }
        }
    },10);

}

function chooseFruit(){
    $("#fruit1").attr('src', 'images/' + fruits[Math.round(8*Math.random())] + '.png')
}

function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}

});