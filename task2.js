String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

const beforeLetter = {
b:'a',c:'b',d:'c',e:'d',f:'e',g:'f',h:'g',i:'h',j:'i',k:'j',l:'k',m:'l',n:'m',
o:'n',p:'o',q:'p',r:'q',s:'r',t:'s',u:'t',v:'u',w:'v',x:'w',y:'x',z:'y',
}

const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y']
const generateLineDots = ( input ) => {
const linesHolder = {};
for(const letter of letters) {
  input.forEach( (row, i) => {
      const j = row.indexOf(letter);
      if(j !== -1){
        linesHolder[letter] = {};
        linesHolder[letter]['from'] = {i, j}
        if(beforeLetter[letter]) {
          linesHolder[beforeLetter[letter]]['to'] = {i, j}
        }
      }
    })
    if(!linesHolder[letter]) {
      linesHolder[beforeLetter[letter]]['to'] = {
        i: linesHolder['a']['from'].i,
        j: linesHolder['a']['from'].j
      }
      return Object.values(linesHolder);
    }
  }
}

const generateStarsPositions = (lines) => {
  const stars = [];
  for( const line of lines) {
    if(line.from.i === line.to.i) {
      const jFrom = line.from.j > line.to.j ? line.to.j : line.from.j;
      const jTo = line.from.j < line.to.j ? line.to.j : line.from.j;
      for( let j = jFrom; j < jTo + 1; j++) {
        stars.push({i: line.from.i, j});
      }
    }
    else if(line.from.j === line.to.j) {
      const iFrom = line.from.i > line.to.i ? line.to.i : line.from.i;
      const iTo = line.from.i < line.to.i ? line.to.i : line.from.i;
      for( let i = iFrom; i < iTo + 1; i++) {
        stars.push({j: line.from.j, i});
      }
    } else {
      const signI = line.from.i < line.to.i
      const signJ = line.from.j < line.to.j
      let j = line.from.j;

      if(signI && signJ) {
        for(let i =  line.from.i; i < line.to.i+1; i++) {
          stars.push({i, j});
          j++;
        }
      } else if(signI && !signJ) {
        for(let i =  line.from.i; i < line.to.i+1; i++) {
          stars.push({i, j});
          j--;
        }
      } else if(!signI && signJ) {
        for(let i =  line.from.i; i > line.to.i-1; i--) {
          stars.push({i, j});
          j++;
        }
      } else {
        for(let i =  line.from.i; i > line.to.i-1; i--) {
          stars.push({i, j});
          j--;
        }
      }
    }
  }
  return stars;
}

const tests = [
  [
    'a        b',
    'e         ',
    '          ',
    'd        c',
  ],
  [
    '   a   ',
    '  e    ',
    '       ',
    'd     b',
    '       ',
    '       ',
    '   c   ',
  ],
  [
    'a     b',
    '       ',
    '       ',
    '       ',
    '       ',
    '       ',
    'c     d',
  ],
  [
    '    b     d    h     i    n      pq    ',
    '                                       ',
    '                                       ',
    '       c                               ',
    '                                       ',
    '                k    j                 ',
    '    a     e    gl   f     m      or    ',
  ]
]

tests.forEach(test => {
  const lineDots = generateLineDots(test);
  const stars = generateStarsPositions(lineDots);
  const output = [...test];
  for(const star of stars) {
    output[star.i]= output[star.i].replaceAt(star.j, '*');
  }
  console.log(output);
})
