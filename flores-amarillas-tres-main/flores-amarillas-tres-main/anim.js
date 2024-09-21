// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Déjame tomarte de la mano", time: 17.5 },
  { text: "Déjame mirarte a los ojos", time: 19 },
  { text: "Déjame a través de mi mirada", time: 22.5 },
  { text: "Darte todo mi esplendor", time: 27 },
  { text: "Déjame quedarme aquí", time: 30 },
  { text: "Déjame besarte ahí", time: 33 },
  { text: "Donde guardas tus secretos", time: 36 },
  { text: "Los más oscuros y los más bellos", time: 40 },
  { text: "Te regalo mis piernas", time: 48 },
  { text: "Recuesta tu cabeza en ellas", time: 50 },
  { text: "Te regalo mis fuerzas", time: 54 },
  { text: "Úsalas cada que no tengas", time: 58 },
  { text: "Te regalo las piezas", time: 62 },
  { text: "Que a mi alma conforman", time: 66 },
  { text: "Que nunca nada te haga falta a ti", time: 69 },
  { text: "Te voy a amar hasta morir", time: 72 },
  { text: "Te voy a amar hasta morir", time: 79 },
  {text:"    ",time:80},
  {text:"    ",time:83},
  {text:"    ",time:86},
  {text:"    ",time:87},
  {text:"    ",time:90},
  {text:"    ",time:92},
  { text: "Déjame jugar contigo", time: 94 },
  { text: "Déjame hacerte sonreír", time: 96 },
  { text: "Déjame darte de mi dulzura", time: 100 },
  { text: "Pa' que sientas lo que sentí", time: 105 },
  { text: "Déjame cuidarte, déjame abrazarte", time: 110 },
  { text: "Déjame enseñarte todo lo que tengo pa' hacerte muy feliz", time: 118 },
  { text: "Te regalo mis piernas", time: 124 },
  { text: "Recuesta tu cabeza en ellas", time: 127 },
  { text: "Te regalo mis fuerzas", time: 131 },
  { text: "Úsalas cada que no tengas", time: 135 },
  { text: "Te regalo las piezas", time: 138 },
  { text: "Que a mi alma conforman", time: 142 },
  { text: "Que nunca nada te haga falta a ti", time: 146 },
  { text: "Te voy a amar hasta morir", time: 149 },
  { text: "Te regalo mis piernas", time: 157 },
  { text: "Recuesta tu cabeza en ellas", time: 160 },
  { text: "Te regalo mis fuerzas", time: 164 },
  { text: "Úsalas cada que no tengas", time: 168 },
  { text: "Te regalo las piezas", time: 171 },
  { text: "Que a mi alma conforman", time: 175 },
  { text: "Que nunca nada te haga falta a ti", time: 178 },
  { text: "Te voy a amar hasta morir", time: 180 },
  { text: "Te voy a amar hasta morir", time: 187 },
  { text: "Te voy a amar hasta morir", time: 193},
  {text:"UUUUHH",time:197},
  {text:"UUUUUHH",time:201},
  {text:"    ",time:206},
  {text:"    ",time:2010},
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);