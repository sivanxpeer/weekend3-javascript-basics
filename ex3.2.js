
// provided with an array of tuples 
//return the number of ppl who are still on the bus after the last station
function bus(busStopsArray){
    let numberOfPeople=0;
    // todo - remove hard coded numbers
    if(busStopsArray[0][1]!==0){
        return "invalid input";
    }
    for(let i=0;i<busStopsArray.length;i++){
       
        numberOfPeople+=busStopsArray[i][0];
        numberOfPeople-=busStopsArray[i][1];
    }
    return numberOfPeople;
}


const stops1 = [[3,2], [0,3], [1,1]] // invalid
const stops2 = [[3,0], [0,3], [1,1]] // people left: 0
const stops3 = [[3,0],[4,2],[5,4]];  // people left: 6   
console.log(bus(stops1));
console.log(bus(stops2));
console.log(bus(stops3));