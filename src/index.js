document.addEventListener('DOMContentLoaded', () => {
  
  const toggleButton = document.getElementById('toggleButton');
  const plataformasList = document.querySelector('.compre-ja .btn-plataforma .plataformas')

  toggleButton.addEventListener('click', () => {
    {/**Adiciona ou remove a class"ativo" da lista */}
    plataformasList.classList.toggle('ativo')
    
  })
})