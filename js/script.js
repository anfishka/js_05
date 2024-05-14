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

function firstColorSecondDel1()
{
document.addEventListener('DOMContentLoaded', (e) => {
    let divs = document.querySelectorAll('div');
  
    divs.forEach((div) => {
      let isClicked = false;
  
      div.addEventListener('click', (e) => {
        e.stopPropagation();
  
        if (e.target.style.backgroundColor === 'blue') {
          e.target.parentNode.removeChild(e.target);
          return;  
        }

        e.target.style.backgroundColor = 'blue';
        isClicked = true;
      });
    });
  });
}


function firstColorSecondDel2()
{
    let clicked = null;
    document.addEventListener('click', e => {
    
      if (e.target.style.backgroundColor !== 'blue') {
        e.target.style.backgroundColor = 'blue';
            clicked = e.target;   
      } else {
        if (e.target === clicked) {
          e.target.parentNode.removeChild(e.target);
          clicked = null;
        }
      }
    });
}
