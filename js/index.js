const historys = [
  {
    title: "Early experiments (1950s – 1960s)",
    description:
      "Games in the form we are used to began to appear with the development of computer technology.\n1952 – British scientist Alexander Douglas creates (OXO) (tic-tac-toe) on the EDSAC computer.\n1958 – American physicist William Higinbotham develops Tennis for Two– one of the first video games.\n1962 – a group of MIT students led by Steve Russell creates Spacewar! – the first digital computer game available on multiple machines.",
  },
  {
    title: "The birth of the industry (1970s)",
    description:
      "In the 70s, games became commercial.\n1971 – the first arcade game (Computer Space) (created by Nolan Bushnell).\n1972 – Bushnell founds Atari, releasing Pong, the first commercially successful game.\n1977 – the release of the Atari 2600, one of the first home video game consoles.\n1978 – The success of Taito's (Space Invaders) cements the popularity of arcade games.",
  },
  {
    title: "Crisis and Rebirth (1980s)",
    description:
      "1983 – The (Video game crisis) due to the glut of the market with low-quality games (especially on Atari).\n1985 – Nintendo releases the Nintendo Entertainment System (NES), restoring trust in games.\n1986 – (The Legend of Zelda) lays the foundation for action-RPG.\n1989 – release of the Game Boy, popularization of portable gaming.",
  },
  {
    title: "The 3D Revolution and the growth of the industry (1990s)",
    description:
      "1991 – (Sonic the Hedgehog) makes Sega a Nintendo console.\n1993 – (Doom) from id Software offers FPS genres.\n1994 – Sony releases PlayStation, making CD a shared user.\n1996 – (Mario 64 update) and (Quake) enjoy the sensations of 3D gaming.1998 – (Half-life) changes the narrative in the game.",
  },
  {
    title: "Online gaming and new technologies (2000s)",
    description:
      "2001-Microsoft releases Xbox, starting a console war with Sony.\n2004 - (World of Warcraft) popularizes MMORPGs.\n2006 – The Nintendo Wii introduces a control engine.\n2007 - (Call of Duty 4: Modern Warfare) makes online multiplayer mainstream.",
  },
  {
    title: "Current trends (2010s-2020s)",
    description:
      "Development of mobile games (Angry Birds, Clash of Clans).\nThe heyday of esports (Dota 2, League of Legends).\nSuccess is an indie player (Minecraft, Undertale).\nCreation of cloud gaming and subscription services (Xbox Game Pass, PlayStation Now).\nPopularization of VR/AR (Oculus Quest, PS VR).",
  },
  {
    title: "What is it now? (2020s)",
    description:
      "The development of artificial intelligence in games.\nMoving towards greater realism (RTX, E5).\nThe growth of mobile gaming and the F2P model.\nThe impact of blockchain and NFT is still ambiguous.",
  },
];
let currentHistoryIndex = 0;
function updateHistory() {
  const history = historys[currentHistoryIndex];
  $("#history-title").text(history.title);
  $("#description").text(history.description);
}
$("#prev-part").on("click", function () {
  currentHistoryIndex =
    (currentHistoryIndex - 1 + historys.length) % historys.length;
  updateHistory();
});
$("#next-part").on("click", function () {
  currentHistoryIndex = (currentHistoryIndex + 1) % historys.length;
  updateHistory();
});
updateHistory();

// games 1950-2020+

const games50 = [
  {
    title: "Tennis for Two (1958)",
    description:
      "One of the first video games simulating a tennis match on an oscilloscope, created by American physicist William Higinbotham.",
    image: "./image/tennis.jpg",
    video: "https://youtu.be/6PG2mdU_i8k?si=b5E3BORKUBvNU31z",
  },
  {
    title: "Spacewar! (1962)",
    description:
      "The first known computer game where two players controlled spaceships and fought in space, developed by MIT students led by Steve Russell.",
    image: "./image/spacewar.jpeg",
    video: "https://youtu.be/tugBeTsQnmU?si=plHGZpwlKALfmGat",
  },
  {
    title: "OXO (1952)",
    description:
      "A digital version of tic-tac-toe developed by British scientist Alexander Douglas for the EDSAC computer.",
    image: "./image/oxo.png",
    video: "https://youtu.be/5w7k6-SG26U?si=sWbdhfEiOYK5Karb",
  },
  {
    title: "Mouse in the Maze (1959)",
    description:
      "A game where users created mazes, and a virtual mouse searched for cheese, developed at MIT.",
    image: "./image/mouse.png",
    video: "https://youtu.be/Kdzzbl_Nd4I?si=ilyONhZ_Ish93l1q",
  },
];
const games70 = [
  {
    title: "Pong (1972)",
    description:
      "A classic arcade game simulating table tennis, developed by Atari and considered one of the first commercially successful video games.",
    image: "./image/pog.png",
    video: "https://youtu.be/fhd7FfGCdCo?si=tvpwnCZB5I9C4FIR",
  },
  {
    title: "Space Invaders (1978)",
    description:
      "A legendary arcade shooter where players defend Earth from alien invaders, created by Tomohiro Nishikado.",
    image: "./image/space invaders.png",
    video: "https://youtu.be/MU4psw3ccUI?si=w6AdnacC6X3_WLz2",
  },
  {
    title: "Adventure (1979)",
    description:
      "The first action-adventure game for the Atari 2600, featuring an open world and object-based puzzles.",
    image: "./image/Adventure.jpeg",
    video: "https://youtu.be/j67VRL4m7eM?si=nEjjEJlVgWsqcaTp",
  },
  {
    title: "Breakout (1976)",
    description:
      "A game where players use a paddle to bounce a ball and break bricks, designed by Steve Wozniak and Steve Jobs.",
    image: "./image/Breakout.jpeg",
    video: "https://youtu.be/hW7Sg5pXAok?si=pN9f1Ufn65yTarHJ",
  },
];
const games80 = [
  {
    title: "Pac-Man (1980)",
    description:
      "An iconic arcade game where a yellow character eats dots while avoiding ghosts, developed by Namco.",
    image: "./image/pac-man.jpeg",
    video: "https://youtu.be/WzMOUevAhYM?si=L6_rOkfRZV41gHv6",
  },
  {
    title: "Donkey Kong (1981)",
    description:
      "The first game featuring Mario, where he must climb platforms to save a princess from a giant ape.",
    image: "./image/Donkey-kong.jpeg",
    video: "https://youtu.be/rYNMatF5hcU?si=fmrnYkH_bwI0s_1r",
  },
  {
    title: "Tetris (1984)",
    description:
      "A puzzle game created by Russian developer Alexey Pajitnov, challenging players to arrange falling blocks.",
    image: "./image/tetris.jpeg",
    video: "https://youtu.be/xmnsR8CY2QI?si=MnaTYxwSZZT1Prey&t=152",
  },
  {
    title: "The Legend of Zelda (1986)",
    description:
      "An action-adventure game from Nintendo, featuring an open world, puzzles, and epic quests.",
    image: "./image/Zelda.jpeg",
    video: "https://youtu.be/c4bvZZa5Mtg?si=0uuFiRyP6v0wy3Ou",
  },
];
const games90 = [
  {
    title: "Doom (1993)",
    description:
      "A revolutionary first-person shooter that defined the FPS genre, featuring intense demon-slaying action.",
    image: "./image/doom.jpeg",
    video: "https://youtu.be/_4YqDJ1ltm4?si=RNcX0qe_uHs9a4Cx",
  },
  {
    title: "Pokémon Red & Blue (1996)",
    description:
      "The beginning of the Pokémon franchise, where players catch, train, and battle creatures in a vast world.",
    image: "./image/pokemon.jpeg",
    video: "https://www.youtube.com/live/hoE47_nH-BU?si=wbrgbfx1q56IE9I1",
  },
  {
    title: "Final Fantasy VII (1997)",
    description:
      "One of the greatest JRPGs of all time, featuring an emotional story and groundbreaking 3D graphics.",
    image: "./image/final-fantasy.jpeg",
    video: "https://youtu.be/8TBDPidXpEU?si=Mt-u2j6fecTx2_pT",
  },
  {
    title: "Half-Life (1998)",
    description:
      "A first-person shooter with a strong focus on storytelling, setting new standards for immersive gameplay.",
    image: "./image/half-life.jpeg",
    video: "https://youtu.be/dtlBrnIy1CQ?si=aozr9om5L-Uwz1eU",
  },
];
const games2000_2010 = [
  {
    title: "Grand Theft Auto: San Andreas (2004)",
    description:
      "An open-world crime game where players explore a massive world filled with action and side missions.",
    image: "./image/GTA-SA.jpeg",
    video: "https://youtu.be/XSltgzPltgs?si=GU48Tb760PPe3l60",
  },
  {
    title: "World of Warcraft (2004)",
    description:
      "The most popular MMORPG of its time, allowing players to explore a vast fantasy world with millions of others.",
    image: "./image/wow.jpeg",
    video: "https://youtu.be/8vPlZW0Apis?si=_cEv_y6cQ091w5fe",
  },
  {
    title: "Call of Duty 4: Modern Warfare (2007)",
    description:
      "A game-changing military shooter that introduced cinematic storytelling and online multiplayer warfare.",
    image: "./image/cod4.jpeg",
    video: "https://youtu.be/oHAs5qThOac?si=m_xsOPSmKbaJBsfM",
  },
  {
    title: "Minecraft (2009)",
    description:
      "A sandbox game where players can build, explore, and survive in a blocky world of endless possibilities.",
    image: "./image/minecraft.jpeg",
    video: "https://youtu.be/1SNBFD9SqfM?si=yHkgIfzRYHmlRE01",
  },
];
const games2010_2020 = [
  {
    title: "The Elder Scrolls V: Skyrim (2011)",
    description:
      "A massive open-world RPG where players embark on epic quests and battle dragons in a vast fantasy land.",
    image: "./image/skyrim.jpeg",
    video: "https://youtu.be/-NhevGw_qBw?si=PAVRdQjcVzoyMYw3",
  },
  {
    title: "The Last of Us (2013)",
    description:
      "A post-apocalyptic action-adventure game with an emotionally gripping story about survival and hope.",
    image: "./image/Thelastofus.jpeg",
    video: "https://youtu.be/5ESeGtZJ4EA?si=9YAcCAtuaIWyzbvt",
  },
  {
    title: "The Witcher 3: Wild Hunt (2015)",
    description:
      "One of the best RPGs ever made, featuring an expansive world, deep storytelling, and engaging combat.",
    image: "./image/witcher3.jpeg",
    video: "https://youtu.be/zcM8lJD1gCs?si=EfK4bJqU8blmJJNv",
  },
  {
    title: "Red Dead Redemption 2 (2018)",
    description:
      "A Western-themed open-world game with breathtaking visuals, a rich story, and immersive gameplay.",
    image: "./image/RDR2.jpeg",
    video: "https://youtu.be/Dw_oH5oiUSE?si=spWPmCulBwG0EG2S",
  },
];
const games2020_plus = [
  {
    title: "Cyberpunk 2077 (2020)",
    description:
      "A cyberpunk open-world RPG with deep storytelling and a futuristic city full of possibilities.",
    image: "./image/cypderpank.jpeg",
    video: "https://youtu.be/Tv9aDXNO6og?si=Xfz6lCxqTUXNWLLb",
  },
  {
    title: "Elden Ring (2022)",
    description:
      "A masterfully crafted RPG from the creators of Dark Souls, featuring an open world and challenging combat.",
    image: "./image/eldenring.jpeg",
    video: "https://youtu.be/qqFN1ZxWfbk?si=d9e5rOHpq4kNfrOa",
  },
  {
    title: "Baldur’s Gate 3 (2023)",
    description:
      "A critically acclaimed RPG inspired by tabletop role-playing games, offering rich choices and deep storytelling.",
    image: "./image/baldursgade.jpeg",
    video: "https://youtu.be/FXyldfVAF9A?si=T9oXtqukWRcRu1yI",
  },
  {
    title: "Alan Wake 2 (2023)",
    description:
      "A psychological thriller with horror elements, following the story of a writer trapped in a nightmare.",
    image: "./image/AlanWAKE.jpeg",
    video: "https://youtu.be/fCyY487J3aQ?si=b94yW_FaFz9FhU36",
  },
];
let currentDecade = "50s";
let currentGameIndex = 0;
const gamesData = {
  "50s": games50,
  "70s": games70,
  "80s": games80,
  "90s": games90,
  "2000s": games2000_2010,
  "2010s": games2010_2020,
  "2020s": games2020_plus,
};
function updateGame() {
  const activeCard = document.querySelector(
    `.game-card[data-decade='${currentDecade}']`
  );
  const game = gamesData[currentDecade][currentGameIndex];
  if (!game) return;
  activeCard.querySelector("#game-title").textContent = game.title;
  activeCard.querySelector("#game-content").innerHTML = game.description;
  activeCard.querySelector("#game-image").src = game.image;
  activeCard.querySelector("#game-video").href = game.video;
}
document.querySelectorAll("#prev-part").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentGameIndex =
      (currentGameIndex - 1 + gamesData[currentDecade].length) %
      gamesData[currentDecade].length;
    updateGame();
  });
});
document.querySelectorAll("#next-part").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentGameIndex = (currentGameIndex + 1) % gamesData[currentDecade].length;
    updateGame();
  });
});
document.querySelectorAll(".epoch-button").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".game-card").forEach((card) => {
      card.classList.remove("active");
    });
    currentDecade = btn.dataset.decade;
    document
      .querySelector(`.game-card[data-decade='${currentDecade}']`)
      .classList.add("active");
    currentGameIndex = 0;
    updateGame();
  });
});
function yooo() {
  document.querySelectorAll(".game-card").forEach((card) => {
    card.classList.remove("active");
  });
  document
    .querySelector(`.game-card[data-decade='50s']`)
    .classList.add("active");
  currentDecade = "50s";
  currentGameIndex = 0;
  updateGame();
}
window.onload = function () {
  yooo();
};

// play

$(document).ready(function () {
  const canvas = document.getElementById("first");
  const ctx = canvas.getContext("2d");
  canvas.width = 700;
  canvas.height = 400;
  let player, obstacles, gameOver, startTime;
  function initGame() {
    player = { x: 325, y: 350, width: 50, height: 50, speed: 10 };
    obstacles = [];
    gameOver = false;
    startTime = Date.now();
    document.getElementById("score").textContent = "life time: 0 sec";
    gameLoop();
  }
  function drawPlayer() {
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);
  }
  function createObstacle() {
    let size = Math.random() * 30 + 20;
    obstacles.push({
      x: Math.random() * (canvas.width - size),
      y: 0,
      width: size,
      height: size,
      speed: 3,
    });
  }
  function drawObstacles() {
    ctx.fillStyle = "red";
    obstacles.forEach((obs) => {
      ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
    });
  }
  function updateObstacles() {
    obstacles.forEach((obs) => {
      obs.y += obs.speed;
      if (obs.y > canvas.height) {
        obstacles.shift();
      }
      if (
        player.x < obs.x + obs.width &&
        player.x + player.width > obs.x &&
        player.y < obs.y + obs.height &&
        player.y + player.height > obs.y
      ) {
        gameOver = true;
      }
    });
  }
  function updateScore() {
    if (!gameOver) {
      let elapsedTime = ((Date.now() - startTime) / 1000).toFixed(1);
      document.getElementById(
        "score"
      ).textContent = `life time: ${elapsedTime} sec`;
    }
  }
  function gameLoop() {
    if (!gameOver) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPlayer();
      drawObstacles();
      updateObstacles();
      updateScore();
      requestAnimationFrame(gameLoop);
    } else {
      document.getElementById("score").textContent += " - GAME OVER";
    }
  }
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && player.x > 0) {
      player.x -= player.speed;
    }
    if (event.key === "ArrowRight" && player.x + player.width < canvas.width) {
      player.x += player.speed;
    }
  });
  document.getElementById("restart").addEventListener("click", () => {
    initGame();
  });
  setInterval(createObstacle, 1000);
  initGame();
});
