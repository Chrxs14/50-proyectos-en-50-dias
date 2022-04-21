const buttons = document.querySelectorAll(".button");
const sounds = [
  {
    name: "applause",
    sound: new Audio("./sounds/sound-board_sounds_applause.mp3"),
  },
  {
    name: "boo",
    sound: new Audio("./sounds/sound-board_sounds_boo.mp3"),
  },
  {
    name: "gasp",
    sound: new Audio("./sounds/sound-board_sounds_gasp.mp3"),
  },
  {
    name: "tada",
    sound: new Audio("./sounds/sound-board_sounds_tada.mp3"),
  },
  {
    name: "victory",
    sound: new Audio("./sounds/sound-board_sounds_victory.mp3"),
  },
  {
    name: "wrong",
    sound: new Audio("./sounds/sound-board_sounds_wrong.mp3"),
  },
];
buttons.forEach((button) => {
  console.log(button.id);
  sounds.forEach((el) => {
    button.addEventListener("click", () => {
      el.sound.pause();
      el.sound.currentTime = 0;
      if (button.id == el.name) {
        el.sound.play();
      }
    });
  });
});
