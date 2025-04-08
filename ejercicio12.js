const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  let mutantByPower = [];
  
  for (let i = 0; i < mutants.length; i++) {
    if (mutants[i].power === power){
      mutantByPower.push(mutants[i].name);
    }
  }
    if (mutantByPower.length > 0){
      return `Se encontró(n) el/los siguiente(s) mutante(s) con el poder de ${power}: ${mutantByPower.join('')}.`;
  } else {
      return `No se encontró ningún mutante con el poder de ${power}.`;
  }
}

console.log(findMutantByPower(mutants, 'telepatía'));
console.log(findMutantByPower(mutants, 'telekinesis'));