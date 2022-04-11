const carnamessubmit = document.querySelector('#car-names-submit');
carnamessubmit.addEventListener('click',checkValidity);

function checkValidity(event){
    event.preventDefault();
    const carnamesstring = document.querySelector('#car-names-input').value;
    const carnamesarr = carnamesstring.split(',');
    if(!carnamesstring.includes(',')){
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


function race(carsname){
    for(let i=0; i<carsname.length ; i++){
        carsname[i] = [];
    }
    for(let i=0 ; i<carsname.length ; i++){
        let randomNumber = MissionUtils.Random.pickNumberInRange(1,9);
        if(randomNumber > 4){
            carsname[i].push('-')
            console.log(carsname[i]);
        }
        else{
            console.log(carsname[i]);
        }
    }}

function carRaceGame(event){
    event.preventDefault();
    const carsname = getCarNames();
    const playtime = getPlayTime();
    const racecars= race(carsname, playtime);
//     const showresult = showResult(racecars);
//     return showresult;
// }
 return racecars;
}

const playtimebtn = document.querySelector('#racing-count-submit');
playtimebtn.addEventListener('click',carRaceGame);