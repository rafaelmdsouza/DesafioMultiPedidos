function buscarUsuario(arrayUsuarios, valorPesquisado) {
    return new Promise((resolve, reject) => {
      for (let usuario of arrayUsuarios) {
        if (Object.values(usuario).includes(valorPesquisado)) {
          resolve(usuario);
          return; 
        }
      }
      reject(new Error('Nenhum usuário encontrado com o valor pesquisado.'));
    });
  }
  
  const arrayUsuarios = [
    { nome: 'João', idade: 25, email: 'joao@example.com' },
    { nome: 'Maria', idade: 30, email: 'maria@example.com' },
    { nome: 'Pedro', idade: 28, email: 'pedro@example.com' }
  ];
  
  const valorPesquisado = 'Pedro';
  
  buscarUsuario(arrayUsuarios, valorPesquisado)
    .then(usuarioEncontrado => {
      console.log('Usuário encontrado:', usuarioEncontrado);
    })
    .catch(error => {
      console.error(error.message);
    });