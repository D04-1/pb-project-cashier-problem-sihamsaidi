const kassiererProblem = (preis, betrag)=> {
let restGeld = betrag - preis;
console.log(restGeld);
const wechselGeld = 0

let zwanziger= Math.floor(restGeld / 20)
restGeld = restGeld - zwanziger * 20

let zehn = Math.floor(restGeld / 10)
restGeld = restGeld - zehn *10

let fünf = Math.floor(restGeld / 5)
restGeld = restGeld - fünf * 5

let einEuro = Math.floor(restGeld / 1)
restGeld = restGeld - einEuro * 1

let zwanzigCentMünze = Math.floor(restGeld / 0.2)
restGeld = restGeld - zwanzigCentMünze * 0.2


let fünfCentMünze= Math.floor(restGeld / 0.05)
restGeld = restGeld -fünfCentMünze* 0.05


console.log(restGeld);
console.log(zwanziger, zehn, fünf, einEuro, zwanzigCentMünze, fünfCentMünze);
}
kassiererProblem(3.75, 50)
kassiererProblem(4.5 , 20)
kassiererProblem(3, 4)
