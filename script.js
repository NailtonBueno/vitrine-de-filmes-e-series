// Array de objetos representando o catálogo de filmes
var catalogo = [
  {
    imagem: "https://upload.wikimedia.org/wikipedia/pt/1/1a/O_Jogo_da_Imita%C3%A7%C3%A3o.jpg",
    nome: "O Jogo da Imitação",
    link: 'https://www.youtube.com/watch?v=GxokSkSqF5E'
  },
  {
    imagem: "https://upload.wikimedia.org/wikipedia/pt/8/84/AOrigemPoster.jpg",
    nome: "A Origem",
    link: 'https://www.youtube.com/watch?v=R_VX0e0PX90'
  },
  {
    imagem: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQfeKnMjyVJRDP67wChFpFYX7g6a00LOSvcoTez4DCyaQI4GSgW",
    nome: "Ex_Machina",
    link: 'https://www.youtube.com/watch?v=54nzsdLPs9I'
  },
  {
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9F2Idx7ZPs1o4roUPBvDfR1FMwCtl0fMNnxzmqeOcye1wgmsO",
    nome: "Rogue One",
    link: 'https://www.youtube.com/watch?v=9oISQcXuki0'
  },
    {
    imagem: "https://m.media-amazon.com/images/I/41FhMSiWxrL._SY445_SX342_.jpg",
    nome: "Perdido em Marte",
    link: 'https://www.youtube.com/watch?v=tCAgtzMUCaA'
  },
  {
    imagem: "https://upload.wikimedia.org/wikipedia/pt/7/78/Baby_Driver_poster.png",
    nome: "Baby Driver",
    link: 'https://youtube.com/watch?v=S25X-gFxX9s&si=T6mTqn-EFJHib7I0'
  },
  {
    imagem: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSR-vhHxUoTEifB2bTXPjfJKBb13Fr81MdJ1n8Xj0rClaKdoR_-",
    nome: "Free Guy",
    link: 'https://www.youtube.com/watch?v=_XNs_Z-2Kwc'
  },
    {
    imagem: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRoeGGWE2SSCdK2gpJnliyvVP1VM2a6Dxk5EoIBDUw5UXG6CJ2x",
    nome: "Aprendiz de Espiã",
    link: 'https://www.youtube.com/watch?v=r5G3tU5ux60&t=1s'
  },
  {
    imagem: "https://media.fstatic.com/5206mzsPdjnmUSMSpSLbpx1FgdM=/322x478/smart/filters:format(webp)/media/movies/covers/2012/05/6582a8345ca09a178f6989b624c8c62f.jpg",
    nome: "American Pie",
    link: 'https://www.youtube.com/watch?v=iUZ3Yxok6N8'
  },
  {
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjksKrlzRyNJIXX3d1dKK0Yu39kZZNTJY6-n6qvlqeFppubxPy",
    nome: "Dungeons & Dragons",
    link: 'https://www.youtube.com/watch?v=PtewyAANr34'
  },
    {
    imagem: "https://1.bp.blogspot.com/-gfYIwNQgYeg/YEt2up5Yy1I/AAAAAAAAHPM/vKYB_P0sr2oCcrfOpM6Dhp4CUgVSI-hcACLcBGAsYHQ/s1066/p%25C3%25B4ster-do-filme-o-po%25C3%25A7o-de-galder-gaztelu-urrutia.jpg",
    nome: "O Poço",
    link: 'https://www.youtube.com/watch?v=_iEHOuPsRsY'
  },
    // ... (repetir para cada filme no catálogo)
  { imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5NQwFKh0UNUNG_gqYFQxWRieOIjdWnhkTgw&usqp=CAU",
    nome: "Ir para Portifólio",
    link: 'https://github.com/NailtonBueno?tab=repositories'
  },
 ];

for (var i = 0; i < catalogo.length; i++) {
  // Seleciona o elemento com a classe "filmes" no HTML
  var divFilmes = document.querySelector(".filmes");
  
  // Cria a estrutura HTML para cada filme usando template literals
  var estruturaFilme = `
    <div class="filme">
      <a href="${catalogo[i].link}" target="_blank">
        <img src="${catalogo[i].imagem}">
      </a>
      <p class="titulo-branco">${catalogo[i].nome}</p>
    </div>
  `;
  
  // Adiciona a estrutura do filme ao conteúdo existente na div de filmes
  divFilmes.innerHTML += estruturaFilme;
}