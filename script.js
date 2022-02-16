let musicas = [
    { titulo: 'HELLO ESCURIDÃO', artista: 'DRAGON BOYS', src: 'dragon22.mp3', img: 'imagens/spotify.png', fundo:'imagens/ramos.jpg' },
    { titulo: 'A VIDA É BELA', artista: 'DRAGON BOY$', src: 'dragon2.mp3', img: 'imagens/dragon2022.png', fundo:'imagens/ddr.jpg' },
    { titulo: 'TRAUMA - LIVE EXPERIENCE', artista: 'DRAGON BOYS', src: 'mecurar.mp3', img: 'imagens/albumnovo.jpg', fundo:'imagens/albumnovo.jpg' },
    { titulo: 'ALGO NO CAMINHO', artista: 'DRAGON BOY$', src: 'algonocaminho.mp3', img: 'imagens/umlugar1.jpg',fundo:'imagens/dragon1.jpg' },
    { titulo: 'JIM CARREY', artista: 'DRAGON BOYS', src: 'jimcarrey.mp3', img: 'imagens/dois.jpg', fundo:'imagens/tres.jpg' },
    { titulo: 'OLDBOY$', artista: 'DRAGON BOY$', src: 'velho.mp3', img: 'imagens/vo.jpg', fundo:'imagens/vo2.jpg' }
]

let musica = document.querySelector("audio");
let duracaoMusica = document.querySelector(".fim");
let imagem = document.querySelector("#img");
let nomeMusica = document.querySelector(".descricao h2");
let nomeArtista = document.querySelector(".descricao i");
let indexMusica = 0;
let range = document.querySelector("input");

renderizarMusica(indexMusica)
musica.addEventListener('timeupdate', atualizarBarra);

function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        document.querySelector("body").style.backgroundImage = 'url("'+ musicas[index].fundo +'")';
        duracaoMusica.textContent = seg_min(Math.floor(musica.duration));
    })
}

function play() {
    musica.play();
    document.querySelector(".pause").style.display = 'inline-block'
    document.querySelector(".play").style.display = 'none'
    
}
function pause() {
    musica.pause();
    document.querySelector(".pause").style.display = 'none'
    document.querySelector(".play").style.display = 'inline-block'
}

function retroceder() {
    musica.currentTime -= 10;
}
function avancar() {
    musica.currentTime += 10;
}

function anterior() {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 5;
    }
    renderizarMusica(indexMusica)
    musica.play();
    document.querySelector(".pause").style.display = 'inline-block'
    document.querySelector(".play").style.display = 'none'

}

function proximo() {
    indexMusica++;
    if (indexMusica > 5) {
        indexMusica = 0;
    }
    renderizarMusica(indexMusica)
    musica.play();
    document.querySelector(".pause").style.display = 'inline-block'
    document.querySelector(".play").style.display = 'none'
}



function atualizarBarra() {
   
    range.max = musica.duration
    range.value = 0
    let tempoDecorrido = document.querySelector(".inicio");
    tempoDecorrido.textContent = seg_min(Math.floor(musica.currentTime));
    if(tempoDecorrido.innerHTML === duracaoMusica.innerHTML){
        proximo()
    }
}
range.onchange = ()=>{musica.currentTime = range.value}
musica.ontimeupdate = ()=>{range.value = musica.currentTime}


function seg_min(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos + ':' + campoSegundos;

}
