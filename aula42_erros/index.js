try {
  // é executado quando não há erro
} catch (error) {
  // é executado quando há erro
} finally {
  // é executado sempre
}

function retornaHora(data){
  if (data && !(data instanceof Date)) {
    throw new Error('A data deve ser um objeto Date');  
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString('pt-BR');
}

try {
  const data = new Date('01-01-1970 12:50:01');
  const hora = retornaHora();
  console.log(hora)
  
} catch (error) {
  //tratar erro
  // console.log(error.message);
} finally {
  console.log("tenha um bom dia")
}