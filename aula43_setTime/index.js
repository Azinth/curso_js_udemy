function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR');
}

function funcaoDoInterval(){
    console.log(mostraHora());
}

const timer = setInterval(function(){
  console.log(mostraHora());
}, 1000);

setTimeout(function(){
  clearInterval(timer);
}, 4000);

setTimeout(function(){
  console.log("tenha um bom dia");
}, 4000);