
// Object declaration: create players
const player1 = {
    name: "Mario",
    speed: 4,
    maneuverability: 3,
    power: 3,
    points: 0,
};

const player2 = {
    name: "Luigi",
    speed: 3,
    maneuverability: 4,
    power: 4,
    points: 0
};

const player3 = {
    name: "Peach",
    speed: 3, 
    maneuverability: 4, 
    power: 2,
    points: 0
};

const player4 = {
    name: "Bowser",
    speed: 5, 
    maneuverability: 2,
    power: 5,
    points: 0
};

const player5 = {
    name: "Yoshi",
    speed: 2,
    maneuverability: 4, 
    power: 3,
    points: 0
};

const player6 = {
    name: "Donkey Kong",
    speed: 2,
    maneuverability: 2,
    power: 5,
    points: 0
};

//--------===========------------------===Functions===-------------==========------- 

// Function to roll a dice 
async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
};

async function getRandomBlock(){
    let random = Math.random();
    let result 

    switch (true){
        case random < 0.33:
            result = "Straight";
            break;
        
        case random > 0.33 && random <0.66:
            result = "Curve";
            break;
        
        default:
            result = "Combat";
            
    }

    return result;
}

async function logRollResult(characterName,block, diceResult, attribute){

    console.log(`${characterName} roll a dice of ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}




async function playRaceEngine(character1, character2){
    // valor inicial, valor limite, o q faz
    for (let round = 1; round <= 5; round++) {
        console.log(`\n🏁 Round ${round} starting...\n`);
        // sort out round
        let block = await getRandomBlock();
        console.log(`Block: ${block}`);
        // roll the dice
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        //hability test

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if( block === "Straight"){
            totalTestSkill1 = character1.speed + diceResult1;
            totalTestSkill2 = character2.speed + diceResult2;

            await logRollResult(character1.name, "speed", diceResult1, character1.speed);
            await logRollResult(character2.name, "speed", diceResult2, character2.speed);

           
        }

        if( block === "Curve"){
            totalTestSkill1 = character1.maneuverability + diceResult1;
            totalTestSkill2 = character2.maneuverability + diceResult2;

            await logRollResult(character1.name, "maneuverability", diceResult1, character1.maneuverability);
            await logRollResult(character2.name, "maneuverability", diceResult2, character2.maneuverability);

        }

        if( block === "Combat"){
            let powerResult1= character1.power + diceResult1;
            let powerResult2= character2.power + diceResult2;

            console.log(`⚔️🥊${character1.name} confrontou com ${character2.name}🥊⚔️`);


            await logRollResult(character1.name, "power", diceResult1, character1.power);
            await logRollResult(character2.name, "power", diceResult2, character2.power);
        
            /* character2.points -= powerResult1 > powerResult2 && character2.points > 0 ? 1 : 0;
            character1.points -= powerResult2 > powerResult1 && character1.points > 0 ? 1 : 0;
            console.log(
                powerResult1 === powerResult2
                ? "\n🤝 Empate no confronto! Nenhum ponto perdido."
                : ""
            ); */

            if(powerResult1 > powerResult2 ){
                console.log(`\n🏆🏁${character1.name} scores a point!`);
                character1.points += 1;
                if (character2.points > 0){
                    character2.points -= 1;
                }
                console.log(`\n💥 ${character2.name} lost a point!`);
                console.log(`Points of ${character2.name} = ${character2.points}!`)
                console.log(`Points of ${character1.name} = ${character1.points}!`)
            }
            else if(powerResult2 > powerResult1){
                console.log(`\n🏆🏁${character2.name} scores a point!`);
                character2.points ++;
                if (character1.points > 0){
                    character1.points -= 1;
                }
                console.log(`\n💥 ${character1.name} lost a point!`);
                console.log(`Points of ${character2.name} = ${character2.points}!`)
                console.log(`Points of ${character1.name} = ${character1.points}!`)
            }
            else{
                console.log(`\n🤝 Tie in the round!`);    
                console.log(`Points of ${character2.name} = ${character2.points}!`)
                console.log(`Points of ${character1.name} = ${character1.points}!`)
            }
           console.log("----------------------------------------")
           continue;
        }

       /*  character2.points -= totalTestSkill1 > totalTestSkill2 && character2.points > 0 ? 1 : 0;
        character1.points -= totalTestSkill2 > totalTestSkill1 && character1.points > 0 ? 1 : 0;
        console.log(
            totalTestSkill1 === totalTestSkill2
            ? "\n🤝 Empate! Nenhum ponto perdido."
            : ""
        ) */

        if(totalTestSkill1 > totalTestSkill2){
            console.log(`\n🏆🏁${character1.name} scores a point!`);
            character1.points += 1;
            console.log(`Points of ${character2.name} = ${character2.points}!`)
            console.log(`Points of ${character1.name} = ${character1.points}!`)
        }
        else if(totalTestSkill2 > totalTestSkill1){
            console.log(`\n🏆🏁${character2.name} scores a point!`);
            character2.points ++;
            console.log(`Points of ${character2.name} = ${character2.points}!`)
            console.log(`Points of ${character1.name} = ${character1.points}!`)
        }
        else{
            console.log(`\n🤝 Tie in the round!`);
            console.log(`Points of ${character2.name} = ${character2.points}!`)
            console.log(`Points of ${character1.name} = ${character1.points}!`)    
        }

        console.log("----------------------------------------")
    }
    

    //crtl + k + c = comentar linha
    //alt + shift + a = comentar bloco
    //alt + shift + tecalado direcional = duplicar linha
}

// Função para declarar o vencedor

async function declareWinner(character1, character2){
    console.log(`\n🏁🚨 The race between ${character1.name} and ${character2.name} has finished! \n`);
    if(character1.points > character2.points){
        console.log(`🏆 The winner is ${character1.name} with ${character1.points} points!`);
    }
    else if(character2.points > character1.points){
        console.log(`🏆 The winner is ${character2.name} with ${character2.points} points!`);
    }
    else{
        console.log(`🤝 The race ended in a tie with ${character1.points} points for each!`);
    }
}

// Auto-executing function (function(){})();

(async function main(){
    console.log(`🏁🚨 The race between ${player3.name} and ${player5.name} is starting... \n`);

    await playRaceEngine(player3, player5);
    await declareWinner(player3, player5);
})();

