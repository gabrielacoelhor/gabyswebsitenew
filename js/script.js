//header transparente
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.classList.add("transparent");
    } else {
      header.classList.remove("transparent");
    }
  });

//mudar pra p&b
const toggleBtn = document.getElementById('toggle-theme');
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

//idiomas
const langBtn = document.getElementById('toggle-language');

const languages = ['PT', 'ES', 'EN'];
let currentLangIndex = 0;

const savedLang = localStorage.getItem('language');
if (savedLang && languages.includes(savedLang)) {
  currentLangIndex = languages.indexOf(savedLang);
  langBtn.textContent = languages[currentLangIndex];
  updateLanguageContent(languages[currentLangIndex]);
} else {
  updateLanguageContent('PT');
}

langBtn.addEventListener('click', () => {
  currentLangIndex = (currentLangIndex + 1) % languages.length;
  const newLang = languages[currentLangIndex];
  langBtn.textContent = newLang;
  localStorage.setItem('language', newLang);
  updateLanguageContent(newLang);
  const newLangCode = getTMDbLanguageCode(newLang);
  fetchAllMoviesFromList(LIST_ID, API_KEY, newLangCode).then(movies => {
    allFetchedMovies = movies;
    applyGenreFilter();
  });
});

function updateLanguageContent(lang) {
  const heroSpan = document.querySelector('#hero .content span');
  const heroP = document.querySelector('#hero .content p');
  const headerTitle = document.querySelector('.header h2');
  const navLinks = document.querySelectorAll('nav ul li a');
  const aboutTitle = document.querySelector('#about .about-content h2');
  const aboutParagraph = document.querySelector('#about .about-content p');
  const filmsTitle = document.querySelector('#favfilms .favfilms-content h2');
  const filmsParagraph = document.querySelector('#favfilms .favfilms-content p');
  const favActorsTitle = document.querySelector('#favactors .favactors-content h2');
  const favActorsParagraph = document.querySelector('#favactors .favactors-content p');
  const actorDescriptions = document.querySelectorAll('.actor-info p');
  const contactTitle = document.querySelector('#contact h2');
  const contactParagraph = document.querySelector('#contact p');

  if (lang === 'PT') {
    heroSpan.textContent = "Welcome to Gabys' Website!";
    heroP.textContent = "A space where I share my favorite movies, actors, and everything I love. Get to know a little more about me!";
    headerTitle.textContent = "Gabys' Website";
    navLinks[0].textContent = "Home";
    navLinks[1].textContent = "About";
    navLinks[2].textContent = "Favorite Films";
    navLinks[3].textContent = "Favorite Actors";
    navLinks[4].textContent = "Contact";
    aboutTitle.textContent = "About Me";
    aboutParagraph.textContent = "My name is Gabriela, I'm 17 years old and I'm currently a Computer Science student in São Paulo, Brazil. While I'm on my way to becoming a future developer and programmer, my biggest passion has always been cinema.";
    filmsTitle.textContent = "My Favorite Films";
    filmsParagraph.textContent = "Here are some of my favorite films. These movies have left a lasting impact on me with their incredible stories, outstanding performances, and unforgettable moments.";
    favActorsTitle.textContent = "My Favorite Actors";
    favActorsParagraph.textContent = "These are some of the actors I admire the most. Their performances inspire me and make their films even more special.";
    actorDescriptions[0].textContent = "Charlize Theron (born 7 August 1975) is a South African and American actress and producer. One of the world's highest-paid actresses, she is the recipient of various accolades, including an Academy Award and a Golden Globe Award. In 2016, Time named her one of the 100 most influential people in the world.";
    actorDescriptions[1].textContent = "Elizabeth Chase Olsen (born February 16, 1989) is an American actress. Born in Sherman Oaks, California, Olsen began acting at age four. She starred in her debut film role in the thriller Martha Marcy May Marlene in 2011, for which she was acclaimed and nominated for a Critics' Choice Movie Award among other accolades, followed by a role in the horror film Silent House. Olsen received a BAFTA Rising Star Award nomination and graduated from New York University two years later.";
    actorDescriptions[2].textContent = "Kathryn Marie Hahn (born July 23, 1973) is an American actress. She began her career on television, starring as a grief counsellor in the NBC crime drama series Crossing Jordan (2001–2007). Hahn gained prominence appearing as a supporting actress in a number of comedy films, including How to Lose a Guy in 10 Days (2003), Anchorman: The Legend of Ron Burgundy (2004), Step Brothers (2008), Our Idiot Brother (2011), We're the Millers and The Secret Life of Walter Mitty (both 2013), and Glass Onion: A Knives Out Mystery (2022).";
    actorDescriptions[3].textContent = "Aubrey Christina Plaza (born June 26, 1984) is an American actress, comedian, and producer. As a teenager, she began acting in local theatre productions and performed improv and sketch comedy at the Upright Citizens Brigade Theatre. After graduating from New York University Tisch School of the Arts, Plaza made her feature film debut in Mystery Team (2009). She gained wide recognition for her role as April Ludgate on the NBC political satire sitcom Parks and Recreation (2009–2015).";
    actorDescriptions[4].textContent = "Catherine Elise Blanchett (born May 14, 1969) is an Australian actor and producer. Regarded as one of the best actresses of her generation, she is known for her versatile work across independent films, blockbusters, and the stage. Blanchett is the recipient of numerous accolades, including two Academy Awards, three British Academy Film Awards, three Screen Actors Guild Awards, and three Golden Globe Awards.";
    actorDescriptions[5].textContent = "Margot Elise Robbie (born 2 July 1990) is an Australian actress and producer. Her work includes blockbusters and independent films, and her accolades include nominations for three Academy Awards, four Golden Globe Awards, and six BAFTA Awards. Time named her one of the 100 most influential people in the world in 2017, and Forbes named her the world's highest-paid actress in 2023.";
    actorDescriptions[6].textContent = "Nicole Mary Kidman (born 20 June 1967) is an Australian and American actress and producer. Known for her work in film and television productions across many genres, she has consistently ranked among the world's highest-paid actresses since the late 1990s. Her accolades include an Academy Award, a British Academy Film Award, a Volpi Cup, two Primetime Emmy Awards, and six Golden Globe Awards. She became the first Australian actor to receive the AFI Life Achievement Award honour in 2024.";
    actorDescriptions[7].textContent = "Jennifer Shrader Lawrence (born August 15, 1990) is an American actress. The world's highest-paid actress in 2015 and 2016, her films have grossed over $6 billion worldwide to date. She appeared in Time's 100 most influential people in the world list in 2013 and the Forbes Celebrity 100 list from 2013 to 2016. Lawrence has received multiple accolades throughout her career, including an Academy Award (Oscar) for Best Actress for her performance in Silver Linings Playbook (2012). She has been nominated for the Oscar four times, also earning nods for Winter’s Bone (2010), American Hustle (2013), and Joy (2015).";
    contactTitle.textContent = "Contact Me";
    contactParagraph.textContent = "Feel free to reach out! You can contact me via email or find me on my favorite platforms.";
  }
  
  else if (lang === 'ES') {
    heroSpan.textContent = "Bem-vindo ao site da Gabys!";
    heroP.textContent = "Um espaço onde compartilho meus filmes favoritos, atores e tudo que eu amo. Conheça um pouco mais sobre mim!";
    headerTitle.textContent = "Site da Gabys";
    navLinks[0].textContent = "Início";
    navLinks[1].textContent = "Sobre";
    navLinks[2].textContent = "Filmes Favoritos";
    navLinks[3].textContent = "Atores Favoritos";
    navLinks[4].textContent = "Contato";
    aboutTitle.textContent = "Sobre Mim";
    aboutParagraph.textContent = "Meu nome é Gabriela, tenho 17 anos e atualmente sou estudante de Ciência da Computação em São Paulo, Brasil. Enquanto sigo meu caminho para me tornar uma futura desenvolvedora e programadora, minha maior paixão sempre foi o cinema.";
    filmsTitle.textContent = "Meus Filmes Favoritos";
    filmsParagraph.textContent = "Aqui estão alguns dos meus filmes favoritos. Esses filmes deixaram um impacto duradouro em mim com suas histórias incríveis, atuações marcantes e momentos inesquecíveis.";
    favActorsTitle.textContent = "Meus Atores Favoritos";
  favActorsParagraph.textContent = "Esses são alguns dos atores que mais admiro. Suas atuações me inspiram e tornam seus filmes ainda mais especiais.";
  actorDescriptions[0].textContent = "Charlize Theron (nascida em 7 de agosto de 1975) é uma atriz e produtora sul-africana e americana. Uma das atrizes mais bem pagas do mundo, ela recebeu diversos prêmios, incluindo um Oscar e um Globo de Ouro. Em 2016, a Time a nomeou uma das 100 pessoas mais influentes do mundo.";
  actorDescriptions[1].textContent = "Elizabeth Chase Olsen (nascida em 16 de fevereiro de 1989) é uma atriz americana. Nascida em Sherman Oaks, Califórnia, Olsen começou a atuar aos quatro anos. Estreou no cinema com o thriller Martha Marcy May Marlene (2011), sendo aclamada e indicada a vários prêmios, incluindo o Critics' Choice Movie Award, seguido do filme de terror Silent House. Ela foi indicada ao BAFTA Rising Star Award e se formou na Universidade de Nova York dois anos depois.";
  actorDescriptions[2].textContent = "Kathryn Marie Hahn (nascida em 23 de julho de 1973) é uma atriz americana. Iniciou sua carreira na televisão, interpretando uma conselheira de luto na série Crossing Jordan (2001–2007). Ganhou destaque como coadjuvante em diversas comédias, incluindo Como Perder um Homem em 10 Dias (2003), O Âncora (2004), Quase Irmãos (2008), Nosso Irmão Idiota (2011), Família do Bagulho e A Vida Secreta de Walter Mitty (ambos 2013), e Glass Onion (2022).";
  actorDescriptions[3].textContent = "Aubrey Christina Plaza (nascida em 26 de junho de 1984) é uma atriz, comediante e produtora americana. Na adolescência, começou a atuar em produções teatrais locais e a fazer improvisações na Upright Citizens Brigade Theatre. Após se formar na Tisch School of the Arts da NYU, estreou no cinema com Mystery Team (2009). Tornou-se amplamente conhecida por seu papel como April Ludgate na série Parks and Recreation (2009–2015).";
  actorDescriptions[4].textContent = "Catherine Elise Blanchett (nascida em 14 de maio de 1969) é uma atriz e produtora australiana. Considerada uma das melhores atrizes de sua geração, é conhecida por sua versatilidade em filmes independentes, grandes produções e teatro. Já recebeu inúmeros prêmios, incluindo dois Oscars, três BAFTAs, três SAG Awards e três Globos de Ouro.";
  actorDescriptions[5].textContent = "Margot Elise Robbie (nascida em 2 de julho de 1990) é uma atriz e produtora australiana. Seu trabalho abrange blockbusters e filmes independentes. Foi indicada a três Oscars, quatro Globos de Ouro e seis BAFTAs. Em 2017, a Time a nomeou uma das 100 pessoas mais influentes do mundo, e em 2023 a Forbes a classificou como a atriz mais bem paga do mundo.";
  actorDescriptions[6].textContent = "Nicole Mary Kidman (nascida em 20 de junho de 1967) é uma atriz e produtora australiana e americana. Reconhecida por seu trabalho em produções de diversos gêneros, está entre as atrizes mais bem pagas do mundo desde o final dos anos 1990. Recebeu um Oscar, um BAFTA, uma Volpi Cup, dois Emmys e seis Globos de Ouro. Em 2024, tornou-se a primeira atriz australiana a receber o prêmio AFI Life Achievement.";
  actorDescriptions[7].textContent = "Jennifer Shrader Lawrence (nascida em 15 de agosto de 1990) é uma atriz americana. Foi a atriz mais bem paga do mundo em 2015 e 2016, e seus filmes já arrecadaram mais de US$ 6 bilhões no mundo todo. Apareceu na lista da Time das 100 pessoas mais influentes do mundo em 2013 e na Forbes Celebrity 100 entre 2013 e 2016. Recebeu um Oscar de Melhor Atriz por O Lado Bom da Vida (2012) e foi indicada ao prêmio outras três vezes, por Inverno da Alma (2010), Trapaça (2013) e Joy (2015)."
  contactTitle.textContent = "Contate-me";
  contactParagraph.textContent = "Sinta-se à vontade para entrar em contato! Você pode me mandar um e-mail ou me encontrar nas minhas plataformas favoritas.";

  } else if (lang === 'EN') {
    heroSpan.textContent = "¡Bienvenido al sitio web de Gabys!";
    heroP.textContent = "Un espacio donde comparto mis películas favoritas, actores y todo lo que amo. ¡Conóceme un poco más!";
    headerTitle.textContent = "Sitio de Gabys";
    navLinks[0].textContent = "Inicio";
    navLinks[1].textContent = "Sobre mí";
    navLinks[2].textContent = "Películas Favoritas";
    navLinks[3].textContent = "Actores Favoritos";
    navLinks[4].textContent = "Contacto";
    aboutTitle.textContent = "Sobre Mí";
    aboutParagraph.textContent = "Me llamo Gabriela, tengo 17 años y actualmente estudio Ciencias de la Computación en São Paulo, Brasil. Aunque estoy en camino de convertirme en desarrolladora y programadora, mi mayor pasión siempre ha sido el cine.";
    filmsTitle.textContent = "Mis Películas Favoritas";
    filmsParagraph.textContent = "Aquí hay algunas de mis películas favoritas. Estas películas dejaron un impacto duradero en mí con sus historias increíbles, actuaciones destacadas y momentos inolvidables.";
    favActorsTitle.textContent = "Mis Actores Favoritos";
  favActorsParagraph.textContent = "Estos son algunos de los actores que más admiro. Sus actuaciones me inspiran y hacen que sus películas sean aún más especiales.";
  actorDescriptions[0].textContent = "Charlize Theron (nacida el 7 de agosto de 1975) es una actriz y productora sudafricana y estadounidense. Es una de las actrices mejor pagadas del mundo y ha recibido varios reconocimientos, incluido un Premio de la Academia y un Globo de Oro. En 2016, Time la nombró una de las 100 personas más influyentes del mundo.";
  actorDescriptions[1].textContent = "Elizabeth Chase Olsen (nacida el 16 de febrero de 1989) es una actriz estadounidense. Comenzó a actuar a los cuatro años, apareciendo en producciones junto a sus hermanas mayores. Su debut cinematográfico fue en el thriller 'Martha Marcy May Marlene' (2011), por el cual recibió elogios de la crítica y varias nominaciones.";
  actorDescriptions[2].textContent = "Kathryn Marie Hahn (nacida el 23 de julio de 1973) es una actriz estadounidense. Comenzó su carrera en televisión y ganó prominencia como actriz de reparto en varias comedias, incluyendo 'Cómo perder a un chico en 10 días' (2003), 'Anchorman' (2004), 'Hermanastros' (2008), 'Nuestro hermano idiota' (2011), 'Somos los Miller' y 'La vida secreta de Walter Mitty' (ambas de 2013), y 'Glass Onion: Un misterio de Knives Out' (2022).";
  actorDescriptions[3].textContent = "Aubrey Christina Plaza (nacida el 26 de junio de 1984) es una actriz, comediante y productora estadounidense. Comenzó su carrera actuando en producciones teatrales locales y realizando comedia de improvisación y sketches. Ganó reconocimiento por su papel de April Ludgate en la serie de comedia 'Parks and Recreation' (2009–2015).";
  actorDescriptions[4].textContent = "Catherine Élise Blanchett (nacida el 14 de mayo de 1969) es una actriz y productora australiana. Es considerada una de las mejores actrices de su generación, conocida por su versatilidad en películas independientes, superproducciones y teatro. Ha recibido numerosos premios, incluyendo dos Premios de la Academia, tres Premios BAFTA, tres Premios del Sindicato de Actores y tres Globos de Oro.";
  actorDescriptions[5].textContent = "Margot Elise Robbie (nacida el 2 de julio de 1990) es una actriz y productora australiana. Su trabajo incluye tanto superproducciones como películas independientes, y ha sido nominada a tres Premios de la Academia, cuatro Globos de Oro y seis Premios BAFTA. En 2017, Time la nombró una de las 100 personas más influyentes del mundo, y en 2023, Forbes la nombró la actriz mejor pagada del mundo.";
  actorDescriptions[6].textContent = "Nicole Mary Kidman (nacida el 20 de junio de 1967) es una actriz y productora australiana y estadounidense. Conocida por su trabajo en producciones cinematográficas y televisivas de diversos géneros, ha sido consistentemente una de las actrices mejor pagadas del mundo desde finales de la década de 1990. Ha recibido un Premio de la Academia, un Premio BAFTA, dos Premios Primetime Emmy y seis Globos de Oro.";
  actorDescriptions[7].textContent = "Jennifer Shrader Lawrence (nacida el 15 de agosto de 1990) es una actriz estadounidense. Fue la actriz mejor pagada del mundo en 2015 y 2016, y sus películas han recaudado más de 6 mil millones de dólares a nivel mundial. Ha recibido múltiples premios, incluyendo un Premio de la Academia por Mejor Actriz por su actuación en 'Silver Linings Playbook' (2012), y ha sido nominada al Oscar en otras tres ocasiones.";
  contactTitle.textContent = "Contáctame";
  contactParagraph.textContent = "¡No dudes en comunicarte! Puedes contactarme por correo electrónico o encontrarme en mis plataformas favoritas.";
  }
}

//API filmes
const API_KEY = '17d26f68bf7a357bd49da123c795b889';
const LIST_ID = 8535297;
const filmsContainer = document.querySelector('.films-container');

async function fetchAllMoviesFromList(listId, apiKey, langCode = 'en-US') {
  const allMovies = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const response = await fetch(`https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}&language=${langCode}&page=${page}`);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      allMovies.push(...data.items);
    }

    if (page === 1) {
      totalPages = Math.ceil(data.item_count / 20);
    }

    page++;
  }

  return allMovies;
}


async function loadFavoriteFilms() {
  try {
    const movies = await fetchAllMoviesFromList(LIST_ID, API_KEY);

    if (!movies || movies.length === 0) {
      filmsContainer.innerHTML = '<p>No movies found in your list.</p>';
      return;
    }

    filmsContainer.innerHTML = '';

    movies.forEach(film => {
      const filmEl = document.createElement('div');
      filmEl.classList.add('film');

      const img = document.createElement('img');
      img.src = `https://image.tmdb.org/t/p/w342${film.poster_path}`;
      img.alt = film.title;

      const title = document.createElement('p');
      title.classList.add('film-title');
      title.innerHTML = `${film.title} (${film.release_date?.slice(0, 4) || 'N/A'})`;

      filmEl.appendChild(img);
      filmEl.appendChild(title);
      filmsContainer.appendChild(filmEl);
    });
  } catch (error) {
    filmsContainer.innerHTML = '<p>Erro ao carregar filmes da API.</p>';
    console.error('Erro:', error);
  }
}

const GENRES = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Musical' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Sci-fi' },
  { id: 53, name: 'Thriller' },
];

let allFetchedMovies = [];

function createGenreFilters() {
  const filterContainer = document.querySelector('.genre-filters');
  GENRES.forEach(genre => {
    const label = document.createElement('label');
    label.innerHTML = `
      <input type="checkbox" value="${genre.id}" />
      ${genre.name}
    `;
    filterContainer.appendChild(label);
  });

  filterContainer.addEventListener('change', applyGenreFilter);
}

function applyGenreFilter() {
  const checkedGenres = Array.from(document.querySelectorAll('.genre-filters input:checked')).map(cb => parseInt(cb.value));
  
  const filteredMovies = checkedGenres.length === 0
    ? allFetchedMovies
    : allFetchedMovies.filter(movie =>
        movie.genre_ids?.some(id => checkedGenres.includes(id))
      );

  renderMovies(filteredMovies);
}

function getTMDbLanguageCode(lang) {
  switch (lang) {
    case 'PT': return 'en-US';
    case 'EN': return 'es-ES';
    case 'ES': return 'pt-BR';
    default: return 'en-US';
  }
}

loadFavoriteFilms();
async function loadFavoriteFilms() {
  try {
    const lang = localStorage.getItem('language') || 'PT';
    const langCode = getTMDbLanguageCode(lang);
    const movies = await fetchAllMoviesFromList(LIST_ID, API_KEY, langCode);

    allFetchedMovies = movies;
    createGenreFilters(); // Cria os checkboxes
    renderMovies(movies); // Mostra todos inicialmente
  } catch (error) {
    filmsContainer.innerHTML = '<p>Erro ao carregar filmes da API.</p>';
    console.error('Erro:', error);
  }
}

function renderMovies(movies) {
  filmsContainer.innerHTML = '';

  if (!movies || movies.length === 0) {
    filmsContainer.innerHTML = '<p>Nenhum filme encontrado para os gêneros selecionados.</p>';
    return;
  }

  movies.forEach(film => {
    const filmEl = document.createElement('div');
    filmEl.classList.add('film');

    const img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w342${film.poster_path}`;
    img.alt = film.title;

    const title = document.createElement('p');
    title.classList.add('film-title');
    title.innerHTML = `${film.title} (${film.release_date?.slice(0, 4) || 'N/A'})`;

    filmEl.appendChild(img);
    filmEl.appendChild(title);
    filmsContainer.appendChild(filmEl);
  });
}

