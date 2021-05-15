const menuButton = document.getElementById('menu__button')
const menu = document.getElementById('menu')
const wrapGame = document.querySelector('.wrap-game')


let menuItems = document.querySelectorAll('.menu__item')
    menuItems.forEach(menu => {
    	menu.addEventListener('click', () => {
    	menuItems.forEach(lvl => lvl.classList.remove('active'))
    	menu.classList.add('active')
    	}) 	
    })

    function deleteCards () {
    	document.querySelector('.main').style.display = 'block';
    	wrapGame.style.display = 'none';
    	wrapGame.innerHTML =  '';
    	wrapGame.className = 'wrap-game';
    }

    function renderCard(number) {
  for(let i=0; i<number; i++) {
    let card = document.createElement ('div');
    let cardInner = document.createElement ('div');
    let cardFront = document.createElement ('div');
    let cardBack = document.createElement ('div');

 card.className = 'flip-card';
    wrapGame.appendChild(card);

    cardInner.className = 'flip-card__inner';
    card.appendChild(cardInner);

    cardFront.className = 'flip-card__front';
    cardInner.appendChild(cardFront);

    cardBack.className = 'flip-card__back';
    cardInner.appendChild(cardBack);

    let rotate = () => {
      let number = Math.round(Math.random());
      cardInner.classList.toggle('rotate');
      if (number === 1) cardBack.classList.add('flip-card__back-bug');
      let cards = document.querySelectorAll('.flip-card');
      cards.forEach(card => card.addEventListener('click', deleteCards));
      }
      card.addEventListener('click', rotate);
  }
}

function chooseLevel(menu) {
  switch(menu) {
    case 'Простой':
    renderCard(3);
    wrapGame.classList.add('simple');
    break;
    case 'Средний':
    renderCard(6);
    wrapGame.classList.add('medium');
    break;
    case 'Сложный':
    renderCard(10);
    wrapGame.classList.add('hard');
    break;
  }
}

function startGame() {
  let menu = document.querySelector('.active').innerText;
  chooseLevel(menu);
  document.querySelector('.main').style.display = 'none';
  wrapGame.style.display = 'flex';
}

menuButton.addEventListener('click', startGame);

