console.log('LOOPS')

const colors = ['red', 'orange', 'blue', 'pink', 'green'];


const colorLoop = () => {
  let domString = '';
  for(let i = 0; i < colors.length; i++) {
    domString += `<h1>${colors[i]}</h1>`;
  }
  
  console.log(domString);
};


const instructors = [
  {first: 'zoe', last: 'Ames'},
  {first: 'mary', last: 'west'},
  {first: 'luke', last: 'lancaster'},
];

const nameLoop = () => { 
  let domString = '';
  for(let i = 0; i < instructors.length; i++){
    domString += `<h1>${instructors[i].first} ${instructors[i].last}</h1>`;
  }
  console.log(domString);
};

nameLoop();