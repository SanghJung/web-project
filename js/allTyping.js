const linkTyping = Array.from(document.querySelectorAll(".link__typing"));
const socialIcon = Array.from(document.querySelectorAll(".sci li i"));

let textLength = [0, 0, 0];

let clickNum = [0, 0, 0];

const linkData = [
  "https://github.com/SanghJung",
  "https://www.facebook.com/sanghoon0508/",
  "https://www.instagram.com/top._.water/",
];

socialIcon.map((item, index) => {
  item.addEventListener("click", function () {
    if (clickNum[index] < 1) {
      clickNum[index] = 1;
      let interval = setInterval(typing, 100);

      function typing() {
        if (textLength[index] < linkData[index].length) {
          let txt = linkData[index].charAt(textLength[index]);
          linkTyping[index].innerHTML += txt;

          textLength[index]++;
        } else {
          clearInterval(interval);
          textLength[index] = 0;
        }
      }
    }
  });
});
