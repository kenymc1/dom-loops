console.log('yo!!!');

const dinosaurs = [
  {type: 't-rex', name: 'Wrex'},
  {type: 'stegosaurus', name: 'Steve'},
  {type: 'velociraptor', name: 'Ted'}
];


const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
}

const buildDinosaursCards = () => {
  let domString = '';
  for (let i = 0; i < dinosaurs.length; i++){
    domString += `<div class="dinosaur">`;
    domString += `<h3>${dinosaurs[i].type}</h3>`;
    domString += `<p>${dinosaurs[i].name}</p>`;
    domString += '</div>';
  }
  // console.log('domString', domString);
 printToDom('dino-barn', domString);

};

buildDinosaursCards();