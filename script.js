const pedidoSlides = [
  {
    type: "image",
    src: "img/01.jpg",
    alt: "Foto 01",
    caption: "Nada de desespero, rsrsrs! SOU EU, SEU AMOR, ESSE QUE SE ENCONTRA A SUA FRENTE! Espero que saiba do que se trata isso, já tá mais que óbvio!"
  },
  {
    type: "image",
    src: "img/02.jpg",
    alt: "Foto 02",
    caption: "Acorda, DÃÃÃÃ! Se trata do meu amor por você né, gata... vou tentar sintetizar em algumas imagens e poucas palavras tudo que venho sentido, espero que goste da surpresa! SPOILER: vai ser uma das coisas mais melosas que você já viu!"
  },
  {
    type: "image",
    src: "img/03.jpg",
    alt: "Foto 03",
    caption: "Mozão, gostaria de deixar claro já inicialmente que é dificílimo verbalizar um sentimento tão incrível e elogiar uma pessoa tão especial como você, sobram sensações e faltam definições precisas, você é demais."
  },
  {
    type: "image",
    src: "img/04.jpg",
    alt: "Foto 04",
    caption: "O início deve ser dado por uma das coisas que eu mais acho fora de série numa relação como a nossa, que é a facilidade que você tem de me fazer sentir bem em qualquer ambiente, da toca da gambá à lapa."
  },
  {
    type: "image",
    src: "img/05.jpg",
    alt: "Foto 05",
    caption: "Rapidamente falando, é indescritível a sensação de estar perto de você, tudo que há de bom em mim se manifesta e meu olhar vem sempre denunciando o quanto você se tornou importante, tá na cara."
  },
  {
    type: "image",
    src: "img/06.jpg",
    alt: "Foto 06",
    caption: "A Louise que eu conheci nesses últimos meses é extraordinária, é de um brilho que tem 1 zilhão de lúmens a mais que o do Sol, de uma empatia e sensibilidade que parece aquele tipo de pessoa que tu imagina ligando pros avós todo dia só pra saber como eles estão, é tão afável que você vê ela alimentando e resgatando os cachorros de rua, sabe? esse tipo de pessoa? é ELA!"
  },
  {
    type: "image",
    src: "img/07.jpg",
    alt: "Foto 07",
    caption: "Com essa companhia a vida vale ser vivida. Você ao meu lado nos episódios importantes tudo fica mais natural, em ordem, da maneira que tem que ser..."
  },
  {
    type: "image",
    src: "img/08.jpg",
    alt: "Foto 08",
    caption: "Os momentos felizes são ainda mais alegres contigo, ainda que nos momentos tristes, você é acalanto, organicamente você conquista cada parte de mim e é isso que eu quero pra sempre"
  },
  {
    type: "image",
    src: "img/09.jpg",
    alt: "Foto 09",
    caption: "Mais do que os sambas de sexta a noite e os grudes no domingo, quero sua companhia nas lojas de artigos esportivos pra sempre vendo esse tipo de cena nos sábados pré cinema"
  },
  {
    type: "image",
    src: "img/10.jpg",
    alt: "Foto 10",
    caption: "Independentemente do humor e da fase que estivermos vivendo, está sempre à disposição pra me dar o privilégio de te admirar numa noite do fim do verão (até tê-la, eu nem sabia que era disso que eu precisava)"
  },
  {
    type: "image",
    src: "img/11.jpg",
    alt: "Foto 11",
    caption: "Gosto de projetar o futuro em devaneio e, só de imaginar ter sua presença em todas as noites de oscar, seja num bar qualquer, no conforto de casa ou viajando; me sinto aconchegado"
  },
  {
    type: "image",
    src: "img/12.jpg",
    alt: "Foto 12",
    caption: "O mais interessante é que pra mim caiu a ficha de que, além de ser companhia para todos os momentos, eu FINALMENTE encontrei a pessoa que me conforta num festival de samba debaixo de chuva no rio de janeiro, aquela parada que parecia ser só pela música e pelo lazer, começa a fazer sentido"
  },
  {
    type: "video",
    src: "img/13.mp4",
    alt: "Vídeo 13",
    caption: "! ALERTA ! Eu sou do tipo de pessoa que duvida de tudo, mas contigo as coisas são reais. Achei que fosse inconcebível uma realidade na qual eu fosse tão pleno. Pra mim essa plenitude tá em coisas do tipo matar os insetos pra você, dormir agarrado de domingo pra segunda acordar cedinho, ficar na sua portaria o máximo de tempo enrolando pra não ir embora. Você ressignificou as músicas de amor pra mim e me mostrou que ao invés de duvidar de tudo, eu tenho que acreditar no amor e no tempo. (não é possível que a gente não tenha ficado juntos em julho de 2022 sem motivo, e, por ironia do destino voltamos a nos ver mais de 2 anos depois). Enfim, dito isso tudo com esse vídeo repetindo, acho que já dá pra dizer que EU TE AMO, (você já disse umas 10 vezes pelo menos, já tá ficando unilateral, emocionada!) arrasta mais uma pro lado aí."
  }
];

const fases = [
  {
    id: "pedido-de-namoro",
    title: "O Piloto: Pedido de Namoro",
    period: "O começo",
    description: "A versão original, simples e escura, guardada como nasceu.",
    thumbnail: "img/01.jpg",
    music: "audio/best-part.mp3",
    theme: "piloto",
    available: true,
    hasProposalFinal: true,
    slides: pedidoSlides
  },
  {
    id: "primeiro-ano",
    title: "Primeiro Ano: Construção",
    period: "Ano 1",
    description: "A fase clara, mais madura e pronta para receber as memórias do primeiro ano.",
    thumbnail: "",
    music: "",
    theme: "primeiro",
    available: true,
    hasProposalFinal: false,
    emptyTitle: "Capítulo em construção",
    emptyText: "Quando você escolher as fotos, legendas e música, este espaço vira o carrossel do primeiro ano de vocês.",
    slides: []
  },
  {
    id: "segundo-ano",
    title: "Segundo Ano: A Consolidação",
    period: "Ano 2",
    description: "Um futuro azul, moderno e ainda fechado, esperando a história alcançar esse ponto.",
    thumbnail: "",
    music: "",
    theme: "segundo",
    available: false,
    hasProposalFinal: false,
    slides: []
  }
];

let faseSelecionada = 1;
let faseAtiva = null;
let slideAtual = 0;

const screens = {
  inicio: document.getElementById("inicio"),
  fases: document.getElementById("fasesContainer"),
  carrossel: document.getElementById("carrosselContainer"),
  pergunta: document.getElementById("perguntaFinal"),
  erro: document.getElementById("erroResposta")
};

const musica = document.getElementById("musica");
const fasesTrack = document.getElementById("fasesTrack");
const carrossel = document.getElementById("carrossel");
const slideCounter = document.getElementById("slideCounter");

function showScreen(screenName) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active-screen"));
  screens[screenName].classList.add("active-screen");
}

function setTheme(theme) {
  document.body.className = `theme-${theme}`;
}

function mostrarFases() {
  setTheme("primeiro");
  renderFases();
  showScreen("fases");
  scrollToSelectedPhase();
}

function renderFases() {
  fasesTrack.innerHTML = "";

  fases.forEach((fase, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "phase-card";
    card.disabled = !fase.available;
    card.setAttribute("aria-label", fase.available ? `Abrir ${fase.title}` : `${fase.title} ainda indisponível`);

    if (index === faseSelecionada) {
      card.classList.add("current");
    }

    if (!fase.available) {
      card.classList.add("locked");
    }

    const thumb = document.createElement("div");
    thumb.className = "phase-thumb";

    if (fase.thumbnail) {
      const image = document.createElement("img");
      image.src = fase.thumbnail;
      image.alt = fase.title;
      thumb.appendChild(image);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "phase-placeholder";
      placeholder.innerText = fase.available ? "♡" : "∞";
      thumb.appendChild(placeholder);
    }

    const info = document.createElement("div");
    info.className = "phase-info";
    info.innerHTML = `
      <strong>${fase.title}</strong>
      <span>${fase.period}</span>
      <span>${fase.description}</span>
      ${fase.available ? "" : "<div class=\"phase-status\">Em breve</div>"}
    `;

    card.appendChild(thumb);
    card.appendChild(info);
    card.onclick = () => {
      faseSelecionada = index;
      renderFases();
      scrollToSelectedPhase();

      if (fase.available) {
        abrirFase(index);
      }
    };

    fasesTrack.appendChild(card);
  });
}

function scrollToSelectedPhase() {
  const cards = fasesTrack.querySelectorAll(".phase-card");
  const selectedCard = cards[faseSelecionada];

  if (selectedCard) {
    selectedCard.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }
}

function moverFase(direction) {
  faseSelecionada = Math.max(0, Math.min(fases.length - 1, faseSelecionada + direction));
  renderFases();
  scrollToSelectedPhase();
}

function abrirFase(index) {
  const fase = fases[index];

  if (!fase.available) {
    return;
  }

  faseAtiva = fase;
  slideAtual = 0;
  setTheme(fase.theme);
  document.getElementById("fasePeriodo").innerText = fase.period;
  document.getElementById("faseTitulo").innerText = fase.title;
  prepararMusica(fase.music);
  atualizarCarrossel();
  showScreen("carrossel");
}

function prepararMusica(src) {
  musica.pause();
  musica.removeAttribute("src");

  if (!src) {
    return;
  }

  musica.src = src;
  musica.load();
  musica.play().catch(() => {});
}

function atualizarCarrossel() {
  carrossel.innerHTML = "";

  if (!faseAtiva || faseAtiva.slides.length === 0) {
    renderEmptyChapter();
    return;
  }

  const slide = faseAtiva.slides[slideAtual];
  const item = document.createElement("div");
  item.className = "carrossel-item active";

  if (slide.type === "video") {
    const video = document.createElement("video");
    video.src = slide.src;
    video.controls = false;
    video.loop = true;
    video.autoplay = true;
    video.muted = true;
    video.playsInline = true;
    item.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = slide.src;
    img.alt = slide.alt || "Memória";
    item.appendChild(img);
  }

  const legenda = document.createElement("p");
  legenda.className = "legenda";
  legenda.innerText = slide.caption;
  item.appendChild(legenda);

  carrossel.appendChild(item);
  atualizarControles();
}

function renderEmptyChapter() {
  const empty = document.createElement("div");
  empty.className = "empty-chapter";
  empty.innerHTML = `
    <h3>${faseAtiva.emptyTitle || "Capítulo reservado"}</h3>
    <p>${faseAtiva.emptyText || "Esse pedaço da história ainda está esperando fotos, textos e música."}</p>
  `;

  carrossel.appendChild(empty);
  atualizarControles();
}

function atualizarControles() {
  const total = faseAtiva?.slides.length || 0;
  document.getElementById("prev").disabled = total === 0 || slideAtual === 0;
  document.getElementById("next").disabled = total === 0 || (!faseAtiva.hasProposalFinal && slideAtual === total - 1);
  slideCounter.innerText = total > 0 ? `${slideAtual + 1} / ${total}` : "em breve";
}

function proximoSlide() {
  if (!faseAtiva || faseAtiva.slides.length === 0) {
    return;
  }

  if (slideAtual < faseAtiva.slides.length - 1) {
    slideAtual++;
    atualizarCarrossel();
    return;
  }

  if (faseAtiva.hasProposalFinal) {
    musica.pause();
    showScreen("pergunta");
  }
}

function slideAnterior() {
  if (slideAtual > 0) {
    slideAtual--;
    atualizarCarrossel();
  }
}

function voltarParaFases() {
  musica.pause();
  setTheme("primeiro");
  renderFases();
  showScreen("fases");
  scrollToSelectedPhase();
}

function responder(aceitou) {
  if (aceitou) {
    alert("Te amo! Agora somos oficialmente namorados!");
  } else {
    showScreen("erro");
  }
}

function voltar() {
  showScreen("pergunta");
}

document.getElementById("startButton").onclick = mostrarFases;
document.getElementById("fasePrev").onclick = () => moverFase(-1);
document.getElementById("faseNext").onclick = () => moverFase(1);
document.getElementById("backToFases").onclick = voltarParaFases;
document.getElementById("next").onclick = proximoSlide;
document.getElementById("prev").onclick = slideAnterior;

setTheme("piloto");
