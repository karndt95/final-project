let language = 'en';

function drinksClicked() {
  let parent = document.querySelector('#content');
  parent.innerHTML ="";
  for (const drink in DRINKS) {
    let child = document.createElement('div');
    child.innerHTML = `<div class="drinks"><img src="${DRINKS[drink].img}" class="drink-img"><p>${DRINKS[drink].name}</p>
      <p>$${Number(DRINKS[drink].price).toFixed(2)}</p><button id="${DRINKS[drink]}">Add</button></div>`;
    parent.appendChild(child);
  }
}

function sidesClicked() {
  let parent = document.querySelector('#content');
  parent.innerHTML ="";
  for (const side in SIDES) {
    let child = document.createElement('div');
    child.innerHTML = `<div class="sides"><img src="${SIDES[side].img}" class="sides-img"><p>${SIDES[side].name}</p>
      <p>$${Number(SIDES[side].price).toFixed(2)}</p><button id="${SIDES[side]}">Add</button></div>`;
    parent.appendChild(child);
  }
}
