let update_user_score=0;
let update_comp_score=0;
const user_score=document.getElementById("user-score");
const comp_score=document.getElementById("comp-score");
const score_board=document.querySelector(".score-board")
const action_result=document.querySelector(".result > p");
const rock=document.getElementById("r");
const paper=document.getElementById("p");
const scissor=document.getElementById("s")

function comp_generate(){
    const choices=["Rock","Paper","Scissor"];
    const a=Math.floor(Math.random()*3);
    return choices[a]
}

function win(user_choice,computer_choice){
    update_user_score++;
    user_score.innerHTML=update_user_score;
    action_result.innerHTML=user_choice+" beats "+computer_choice+".You Win..🔥"
}

function loss(user_choice,computer_choice){
    update_comp_score++;
    comp_score.innerHTML=update_comp_score;
    action_result.innerHTML=user_choice+" loses to "+computer_choice+".You Loss..💩"
}

function draw(user_choice,computer_choice){
    action_result.innerHTML=user_choice+" is equals to "+computer_choice+".Its Draw..👍"
}

function game(user_choice){
    let computer_choice=comp_generate();
    switch(user_choice + computer_choice){
        case "RockScissor":
        case "PaperRock":
        case "ScissorPaper":
            win(user_choice,computer_choice);
            break;
        case "ScissorRock":
        case "RockPaper":
        case "PaperScissor":
            loss(user_choice,computer_choice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorScissor":
            draw(user_choice,computer_choice);
            break;
    }

}


function main(){
rock.addEventListener('click',function(){
    game("Rock");
})
paper.addEventListener('click',function(){
    game("Paper");
})
scissor.addEventListener('click',function(){
    game("Scissor");
})
}
main();

