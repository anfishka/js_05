let divs = document.getElementsByTagName("div");

//1) При клике на любой блок - менять его фон на синий

function color() {
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", (e) => {
      e.target.style.backgroundColor = "blue";
    });
  }
}

//2) при двойном клике на компонент увеличить его размер х2
function zoom() {
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("dblclick", (e) => {
      e.target.style.transform = "scale(2)";
    });
  }
}

//3) при клике на компонент - менять его фон на синий. При повторном клике на такой - удалять его

function secondClickToDel() {
  for (let i = 0; i < divs.length; i++) {
    let isClicked = false;

    divs[i].addEventListener("click", (e) => {
      if (!isClicked) {
        e.target.style.backgroundColor = "blue";
        isClicked = true;
      } else {
        e.target.parentNode.removeChild(e.target);
      }
    });
  }
}
