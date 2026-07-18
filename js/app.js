let preguntas=[];
let usadas=[];
let actual=null;
let t;


fetch("data/preguntas.json")
.then(res => res.json())
.then(data => {
    preguntas=data;
    console.log("Preguntas cargadas:", preguntas.length);
})
.catch(error => console.error("Error cargando preguntas:", error));


function nueva(){

    if(preguntas.length===0){
        alert("No se cargaron preguntas");
        return;
    }

    if(usadas.length===preguntas.length){
        usadas=[];
    }

    let i;

    do{
        i=Math.floor(Math.random()*preguntas.length);
    }
    while(usadas.includes(i));


    usadas.push(i);
    actual=preguntas[i];


    document.getElementById('card').innerHTML =
    '<h2>'+actual.categoria+'</h2><p>'+actual.pregunta+'</p>';


    document.getElementById('resp').innerHTML='';


    let s=30;
    document.getElementById('timer').textContent=s;


    clearInterval(t);

    t=setInterval(()=>{
        s--;
        document.getElementById('timer').textContent=s;

        if(s<=0){
            clearInterval(t);
        }

    },1000);
}


function respuesta(){

    if(actual){
        document.getElementById('resp').innerHTML=
        '<h2>Respuesta:</h2>'+actual.respuesta;
    }

}
