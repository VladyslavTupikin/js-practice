Grasshopper - Messi goals function

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
=================================

Return Negative

function makeNegative(num) {
  
  if (num < 0)
    return num;
  
  const negative = num * - 1;
  return negative;
}
======================================================

Grasshopper - Terminal game move function

function move (position, roll) {
  
  const shift = roll * 2;
  return shift + position;
}
======================================================

Grasshopper - Personalized Message

function greet (name, owner) {

  if (name === owner)
    return "Hello boss"
  else
    return "Hello guest"
}
=================================================

Keep Hydrated!
function litres(time) {
  
  if(time < 1)
    return 0
  
  if(time >= 1.5)
    return Math.floor(time*0.5);

  return 0
}
=================================================

Opposites Attract

function lovefunc(flower1, flower2){
  return (((flower1 + flower2) % 2) != 0) 
}
===========================================================

Convert a string to an array

function stringToArray(string){

return string.split(" ");

}
===========================================================

DNA to RNA Conversion
function DNAtoRNA(dna) {
   let tmp = [...dna];
     for (let i = 0; i < tmp.length; i++) {
       if (tmp[i] == "T") {
         tmp[i] = "U";
       }
     }
    return tmp.join("");
}
===========================================================

Smallest value of an array
function min(arr, toReturn) { 
  const tmp = [...arr];
  tmp.sort((a, b) => {
    return a - b;
  });

  const idx = arr.indexOf(tmp[0]);

  if (toReturn === "value") return arr[idx];
  if (toReturn === "index") return idx;
}
=======================================================

You Can't Code Under Pressure #1
function doubleInteger(i) {
  return i * 2;
}
}
=======================================================
