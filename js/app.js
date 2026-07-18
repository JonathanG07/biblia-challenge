let preguntas=[{"categoria": "🔵 Personajes", "pregunta": "¿Quién construyó el arca?", "respuesta": "Noé"}, {"categoria": "🔴 Eventos", "pregunta": "¿Dónde nació Jesús?", "respuesta": "Belén"}, {"categoria": "🟢 Versículos", "pregunta": "Completa: Jehová es mi...", "respuesta": "Pastor"}, {"categoria": "🟡 Mímica", "pregunta": "Representa a David venciendo a Goliat.", "respuesta": "David y Goliat"}, {"categoria": "🟣 Canción", "pregunta": "Canta una alabanza sobre el amor de Dios.", "respuesta": "Respuesta libre"}];
let usadas=[];let actual=null;let t;
function nueva(){
 if(usadas.length===preguntas.length)usadas=[];
 let i;
 do{i=Math.floor(Math.random()*preguntas.length)}while(usadas.includes(i));
 usadas.push(i);actual=preguntas[i];
 document.getElementById('card').innerHTML='<h2>'+actual.categoria+'</h2><p>'+actual.pregunta+'</p>';
 document.getElementById('resp').innerHTML='';
 let s=30;document.getElementById('timer').textContent=s;
 clearInterval(t);t=setInterval(()=>{s--;timer.textContent=s;if(s<=0)clearInterval(t)},1000);
}
function respuesta(){if(actual)document.getElementById('resp').innerHTML='<h2>Respuesta:</h2>'+actual.respuesta;}
