// Carne - 400 gr por pessoa + de 6 horas - 650
// cerveja - 1200ml por pessoa + 6 horas - 2000 ml
// refri/agua - 1000ml por pessoa + 6 horas 1500ml
// crianças valor por 0,5

var meet = 400 
var beer = 1200 
var waterSoda = 1000 
var duracao = 6
meet = 400*0.001
beer = 1200*0.001
waterSoda = 1000*0.001


function calcular(){

   

    let adulto = document.getElementById("adultos");
    let criancas = document.getElementById("criancas");
    let duracao = document.getElementById("duracao");
    let resultado = document.getElementById("resultado")

        if(duracao.value == 0 || adulto.value == 0 && criancas.value == 0 ){
        resultado.innerHTML = "favor preencher os campos"
        }else{

            if (duracao.value > 6){
            meet = 650 
            beer = 2000 
            waterSoda = 1500   

            meet = meet*0.001
            beer = beer*0.001
            waterSoda = waterSoda* 0.001

            }else{
                meet = 400*0.001
                beer = 1200*0.001
                waterSoda = 1000*0.001
            }

            console.log(meet,beer,waterSoda)
            console.log(adulto.value,criancas.value,duracao.value)
   
        let adSomaMeet = adulto.value * meet
        let adSomaBeer = adulto.value * beer
        let adSomaWaterSoda = adulto.value * waterSoda
        let kidMeet = (criancas.value * meet)/2
        let kidWaterSoda = criancas.value/2 * waterSoda
        let totalMeet = kidMeet + adSomaMeet
        let totalWaterSoda = adSomaWaterSoda + kidWaterSoda

        resultado.innerHTML = `carne ${totalMeet.toFixed(1)}Kg` + `<br>Cerveja ${adSomaBeer.toFixed(0)}L` + `<br> Refrigerante e água ${totalWaterSoda.toFixed(0)}L`



    }

   
   
    


}

