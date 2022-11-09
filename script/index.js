const rightArrow = document.getElementById("rightArrow");
const leftArrow = document.getElementById("leftArrow");
const img = document.getElementById("chaussure");
const desc = document.getElementById("description");
const imgArray = [
  "sneaker.png",
  "Black-Shoes-Background-PNG-Image.png",
  "Sneaker-PNG-Transparent-Image.png",
];
const descArray = [
  `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it to make a type specimen book. It has survived not
  only five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s
  with the release of Letraset sheets containing Lorem Ipsum passages,
  and more recently with desktop publishing software like Aldus
  PageMaker including versions of Lorem Ipsum.`,
  "VERY COOL SNEAKERS!!!VERY COOL SNEAKERS!!!VERY COOL SNEAKERS!!!VERY COOL SNEAKERS!!!VERY COOL SNEAKERS!!!VERY COOL SNEAKERS!!!VERY COOL SNEAKERS!!!VERY COOL SNEAKERS!!!VERY COOL SNEAKERS!!!VERY COOL SNEAKERS!!!VERY COOL SNEAKERS!!!VERY COOL SNEAKERS!!!VERY COOL SNEAKERS!!!VERY COOL SNEAKERS!!!VERY COOL SNEAKERS!!!VERY COOL SNEAKERS!!!VERY COOL SNEAKERS!!!VERY COOL SNEAKERS!!!VERY COOL SNEAKERS!!!VERY COOL SNEAKERS!!!VERY COOL SNEAKERS!!!VERY COOL SNEAKERS!!!VERY COOL SNEAKERS FOR JORDAN!!!",
  `HMM NICE NICE Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it to make a type specimen book. It has survived not
  only five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s
  with the release of Letraset sheets containing Lorem Ipsum passages,
  and more recently with desktop publishing software like Aldus
  PageMaker including versions of Lorem Ipsum.`,
];
let i = 0;
console.log(rightArrow);
rightArrow.onclick = () => {
  if (i == imgArray.length - 1) {
    i = 0;
  } else {
    i++;
  }
  img.src = `/assets/${imgArray[i]}`;
  desc.innerText = descArray[i];
};

leftArrow.onclick = () => {
  if (i == 0) {
    i = imgArray.length - 1;
  } else {
    i--;
  }
  img.src = `/assets/${imgArray[i]}`;
  desc.innerText = descArray[i];
};
