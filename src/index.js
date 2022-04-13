const carnamessubmit = document.querySelector('#car-names-submit');
carnamessubmit.addEventListener('click',checkValidity);

function checkValidity(event){
    event.preventDefault();
    const carnamesstring = document.querySelector('#car-names-input').value;
    const carnamesarr = carnamesstring.split(',');
    const regex = /.+\,.+\,.+\,.+/
    if(carnamesstring !== regex){
        alert( "You need to type , between cars' names.")
    }
    else if(!carnamesarr.every((item)=>item.length <= 5)){
        console.log(carnamesarr[0].length);
        alert ("Maxium five character for each car's name.")
    }
}

function getCarNames(){
    const carnamesstring = document.querySelector('#car-names-input').value;
    const carnamesarr = carnamesstring.split(',')
    return carnamesarr;
}

function getPlayTime(){
    const playtime  = document.querySelector('#racing-count-input').value;
    return Number(playtime);
}

class Cars{
    constructor(name){
        this.name = name
        this.scores = []
    }

    move(){
        let randomNumber = MissionUtils.Random.pickNumberInRange(1,9);
        if(randomNumber > 4){
            this.scores.push('-')
           }
    }

    accumlatedScore(round){
        return this.scores.slice(0,round+1).join('');
  //      return scroeWithRound.reduce((acc,val)=>acc+val,0);
    }
}

function race(cars,playtime){
    const result = []
    for(let i=0 ; i<playtime ; i++){
       for(let car of cars){
          car.move();
    }
} return cars;
}

function showResult(result,playtime){
  let resultPhrase= ''
  for(let i=0; i<playtime ; i++){
    for(let car of result){
        resultPhrase += `${car.name} : ${car.accumlatedScore(i)}<br>`
    }
    resultPhrase += `<br>`
    }return resultPhrase;
}

function findWinner(result){
    let finalScores=[];
    for(let car of result){
        finalScores.push(car.scores);
    }
    let max = finalScores[0].length;
    let winners = ''
    finalScores.forEach((item)=> max = Math.max(max, item.length));
    for(let i=0; i<result.length ; i++){
        if(finalScores[i].length === max){
        winners += `${result[i].name} `;
        }
    }
    return winners;
}

const onScreen = document.querySelector('#result');
const onScreenWinner = document.querySelector('#racing-winners')

function carRaceGame(event){
    event.preventDefault();
    const carnames = getCarNames();
    const cars = []
    for(const carname of carnames){     
        cars.push(new Cars(carname));
    }
    const playtime = getPlayTime();
    const result= race(cars,playtime);
    const showresult = showResult(result,playtime);
    const winner = findWinner(result);
    onScreen.innerHTML = showresult;
    onScreenWinner.textContent = winner;
}

const playtimebtn = document.querySelector('#racing-count-submit');
playtimebtn.addEventListener('click',carRaceGame);