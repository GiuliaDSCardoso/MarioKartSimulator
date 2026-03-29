
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
            result = "RETA";
            break;
        
        case random > 0.33 && random <0.66:
            result = "CURVA";
            break;
        
        default:
            result = "CONFRONTO";
            
    }

    return result;
}

async function logRollResult(characterName,block, diceResult, attribute){

    console.log(`${characterName} rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}




async function playRaceEngine(character1, character2){
    // valor inicial, valor limite, o q faz
    for (let round = 1; round <= 5; round++) {
        console.log(`\n🏁 Rodada ${round} começando...\n`);
        // sort out round
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);
        // roll the dice
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        //hability test

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if( block === "RETA"){
            totalTestSkill1 = character1.speed + diceResult1;
            totalTestSkill2 = character2.speed + diceResult2;

            await logRollResult(character1.name, "speed", diceResult1, character1.speed);
            await logRollResult(character2.name, "speed", diceResult2, character2.speed);

           
        }

        if( block === "CURVA"){
            totalTestSkill1 = character1.maneuverability + diceResult1;
            totalTestSkill2 = character2.maneuverability + diceResult2;

            await logRollResult(character1.name, "maneuverability", diceResult1, character1.maneuverability);
            await logRollResult(character2.name, "maneuverability", diceResult2, character2.maneuverability);

        }

        if( block === "CONFRONTO"){
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
                console.log(`\n🏆🏁${character1.name} marcou um ponto!`);
                character1.points += 1;
                if (character2.points > 0){
                    character2.points -= 1;
                }
                console.log(`\n💥 ${character2.name} perdeu um ponto!`);
                console.log(`Pontos do(a) ${character2.name} = ${character2.points}!`)
                console.log(`Pontos do(a) ${character1.name} = ${character1.points}!`)
            }
            else if(powerResult2 > powerResult1){
                console.log(`\n🏆🏁${character2.name} marcou um ponto!`);
                character2.points ++;
                if (character1.points > 0){
                    character1.points -= 1;
                }
                console.log(`\n💥 ${character1.name} perdeu um ponto!`);
                console.log(`Pontos do(a) ${character2.name} = ${character2.points}!`)
                console.log(`Pontos do(a) ${character1.name} = ${character1.points}!`)
            }
            else{
                console.log(`\n🤝 Empate na rodada!`);    
                console.log(`Pontos do(a) ${character2.name} = ${character2.points}!`)
                console.log(`Pontos do(a) ${character1.name} = ${character1.points}!`)
            }
           
        }

       /*  character2.points -= totalTestSkill1 > totalTestSkill2 && character2.points > 0 ? 1 : 0;
        character1.points -= totalTestSkill2 > totalTestSkill1 && character1.points > 0 ? 1 : 0;
        console.log(
            totalTestSkill1 === totalTestSkill2
            ? "\n🤝 Empate! Nenhum ponto perdido."
            : ""
        ) */

        if(totalTestSkill1 > totalTestSkill2){
            console.log(`\n🏆🏁${character1.name} marcou um ponto!`);
            character1.points += 1;
            console.log(`Pontos do(a) ${character2.name} = ${character2.points}!`)
            console.log(`Pontos do(a) ${character1.name} = ${character1.points}!`)
        }
        else if(totalTestSkill2 > totalTestSkill1){
            console.log(`\n🏆🏁${character2.name} marcou um ponto!`);
            character2.points ++;
            console.log(`Pontos do(a) ${character2.name} = ${character2.points}!`)
            console.log(`Pontos do(a) ${character1.name} = ${character1.points}!`)
        }
        else{
            console.log(`\n🤝 Empate na rodada!`);
            console.log(`Pontos do(a) ${character2.name} = ${character2.points}!`)
            console.log(`Pontos do(a) ${character1.name} = ${character1.points}!`)    
        }

        console.log("----------------------------------------")
    }
    

    //crtl + k + c = comentar linha
    //alt + shift + a = comentar bloco
    //alt + shift + tecalado direcional = duplicar linha
}

// Função para declarar o vencedor

async function declareWinner(character1, character2){
    console.log(`\n🏁🚨 Corrida entre ${character1.name} e ${character2.name} terminou! \n`);
    if(character1.points > character2.points){
        console.log(`🏆 O vencedor é ${character1.name} com ${character1.points} pontos!`);
    }
    else if(character2.points > character1.points){
        console.log(`🏆 O vencedor é ${character2.name} com ${character2.points} pontos!`);
    }
    else{
        console.log(`🤝 A corrida terminou empatada com ${character1.points} pontos para cada!`);
    }
}

// Auto-executing function (function(){})();

(async function main(){
    console.log(`🏁🚨 Corrida entre ${player3.name} e ${player5.name} começando... \n`);

    await playRaceEngine(player3, player5);
    await declareWinner(player3, player5);
})();

