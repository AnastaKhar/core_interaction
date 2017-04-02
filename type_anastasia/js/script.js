  var inputWord = ''

  var dictionary = {
    // 'zsedc' : 'A',
    // 'xdrfv' : 'A',
    // 'cftgb' : 'A',
    
    'zsedc', 'xdrfv', 'cftgb', 'vgyhn', 'bhujm', 'njik,', 'mkol.' : 'A',
    'zaqwsx', 'xswedc', 'cderfv', 'vfrtgb', 'bgtyhn', 'nhyujm', 'mjuik,', ',kiol.' : 'B',
    'waz', 'esx', 'rdc', 'tfv', 'ygb', 'uhn', 'ijm', 'ok,', 'pl.' : 'C';
    'qwedxza', 'xswerfc', 'cdertgv', 'vfrtyhb', 'bgtyujn', 'nhyuikm', 'mjuiol,' : 'D';
    'ewqaszxc', 'rewsdxcv', 'tredfcvb', 'ytrfgvbn', 'uytghbnm', 'iuyhjnm,', 'oiujkm,.' : 'E';
    'ewqasz', 'rewsdx', 'tredfc', 'ytrfgv', 'uytghb', 'iuyhjn', 'oiujkm', 'poikl,' : 'F';
    'wqazxcfd', 'ewsxcvgf', 'redcvbhg', 'trfvbnjh', 'ytgbnmkj', 'uyhnm,lk', 'iujm,.;l' : 'G';
    'qazsedc', 'wsxdrfv', 'edcftgb', 'rfvgyhn', 'tgbhujm', 'yhnjik,', 'ujmkol.' : 'H';
    'qaz', 'wsx', 'edc', 'rfv', 'tgb', 'yhn', 'ujm', 'ik,', 'ol.' : 'I';
    'wsxz', 'edcx', 'rfvc', 'tgbv', 'yhnb', 'ujmn', 'ik,m', 'ol.,' : 'J';
    'qazsec', 'wsxdrv', 'edcftb', 'rfvgyn', 'tgbhu', 'tgbhum', 'yhnji,', 'ujmko.' : 'K';
    'qazxc', 'wsxcv', 'edcvb', 'rfvbn', 'tgbnm', 'yhnm,', 'ujm,.' : 'L';
    'zsedcftgb', 'xdrfvgyhn', 'cftgbhujm', 'vgyhnjik,', 'bhujmkol.' : 'M';
    'zsedcft', 'xdrfvgy', 'cftgbhu', 'vgyhnji', 'bhujmko', 'njik,lp' : 'N';
    'ewazxd', 'resxcf', 'trdcvg', 'ytfvbh', 'uygbnj', 'iuhnmk', 'oijm,l' : 'O';
    'zaqws', 'xswed', 'cderf', 'vfrtg', 'bgtyh', 'nhyuj', 'mjuik', ',kiol' : 'P';
    'awedxc', 'serfcv', 'drtgvb', 'ftyhbn', 'gyujnm', 'huikm,', 'jiol,.' : 'Q';
    'zaqwsc', 'xswedv', 'cderfb', 'vfrtgn', 'bgtyhm', 'nhyuj,', 'mjuik.' : 'R';
    'wqasdfcx', 'ewsdfgvc', 'redfghbv', 'trfghjnb', 'ytghjkmn', 'uyhjkl,m' : 'S';
    'qwesx', 'werdc', 'ertfv', 'rtygb', 'tyuhn', 'yuijm', 'uiok,', 'uiok,', 'iopl.' : 'T';
    'qazxde', 'wsxcfr', 'edcvgt', 'rfvbhy', 'tgbnju', 'yhnmki', 'ujm,lo' : 'U';
    'qazse', 'wsxdr', 'edcft', 'rfvgy', 'tgbhu', 'yhnji', 'ujmko', 'ik,lp' : 'V';
    'qazsedcft', 'wsxdrfvgy', 'edcftgbhu', 'rfvgyhnji', 'tgbhujmko', 'yhnjik,lp' : 'W';
    'qsezc', 'wdrxv', 'eftcb', 'rgyvn', 'thubm', 'yjin,', 'ukom.' : 'X';
    'qsez', 'wdrx', 'eftc', 'rgyv', 'thub', 'yjin', 'ukom', 'ilp,' : 'Y';
    'qweszxc', 'werdxcv', 'ertfcvb', 'rtygvbn', 'tyuhbnm', 'yuijnm,', 'uiokm,.' : 'Z';
    'qazc', 'wsxv', 'edcb', 'rfvn', 'tgbm', 'yhn,', 'ujm.' : '!'
    'qwesxv', 'werdcb', 'ertfvn', 'rtygbm', 'tyuhn,', 'yuijm.' : '?'
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm' : '.'
    'qa', 'ws', 'ed', 'rf', 'tg', 'yh', 'uj', 'ik', 'ol', 'az', 'sx', 'dc', 'fv', 'gb', 'hn', 'jm', 'k,', 'l.' : ','

}

$(document).ready(function() {
 var entryCount = 0;
 var displayCount = 0;

  //capture key presses
  $(document).on("keypress", function(e) {
    e.preventDefault();
    entryCount ++;
    displayCount ++;

    //translate unicode to characters        
    var char = String.fromCharCode(e.which);
    console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
    saveCharacter(char);
    createElement(char);
  });

  //capture function keys
  $(document).on("keydown", function(e) {
    //if pressed key is a backspace
    if (e.which == 8){
      e.preventDefault();
      entryCount ++;
      displayCount --;
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
      deleteElement();
    }
  });

});

function createElement(k) {
  var elem = $('#cursor');
  if (k == "a" || k == "A") { elem.before('<span class="inner">A</span>'); }
  if (k == "b" || k == "B") { elem.before('<span class="inner">B</span>'); }
  if (k == "c" || k == "C") { elem.before('<span class="inner"><img src="http://a.deviantart.net/avatars/i/n/infinitenyancatplz.gif"></span>'); }
  if (k == "d" || k == "D") { elem.before('<span class="inner">D</span>'); }
  if (k == "e" || k == "E") { elem.before('<span class="inner">E</span>'); }
  if (k == "f" || k == "F") { elem.before('<span class="inner">F</span>'); }
  if (k == "g" || k == "G") { elem.before('<span class="inner">G</span>'); }
  if (k == "h" || k == "H") { elem.before('<span class="inner">H</span>'); }
  if (k == "i" || k == "I") { elem.before('<span class="inner">I</span>'); }
  if (k == "j" || k == "J") { elem.before('<span class="inner">J</span>'); }
  if (k == "k" || k == "K") { elem.before('<span class="inner">K</span>'); }
  if (k == "l" || k == "L") { elem.before('<span class="inner">L</span>'); }
  if (k == "m" || k == "M") { elem.before('<span class="inner">M</span>'); }
  if (k == "n" || k == "N") { elem.before('<span class="inner">N</span>'); }
  if (k == "o" || k == "O") { elem.before('<span class="inner">O</span>'); }
  if (k == "p" || k == "P") { elem.before('<span class="inner">P</span>'); }
  if (k == "q" || k == "Q") { elem.before('<span class="inner">Q</span>'); }
  if (k == "r" || k == "R") { elem.before('<span class="inner">R</span>'); }
  if (k == "s" || k == "S") { elem.before('<span class="inner">S</span>'); }
  if (k == "t" || k == "T") { elem.before('<span class="inner">T</span>'); }
  if (k == "u" || k == "U") { elem.before('<span class="inner">U</span>'); }
  if (k == "v" || k == "V") { elem.before('<span class="inner">V</span>'); }
  if (k == "w" || k == "W") { elem.before('<span class="inner">W</span>'); }
  if (k == "x" || k == "X") { elem.before('<span class="inner">X</span>'); }
  if (k == "y" || k == "Y") { elem.before('<span class="inner">Y</span>'); }
  if (k == "z" || k == "Z") { elem.before('<span class="inner">Z</span>'); }
  if (k == " ") { elem.before('<span class="inner">&nbsp;</span>') };
}

function deleteElement() {
  $(".inner").last().remove();
  inputWord = '';
}

function saveCharacter (c) {
  inputWord = inputWord + c;
  searchForWord(inputWord);
  console.log(inputWord);

}

function searchForWord(w) {
  var word = Object.keys(dictionary)
  console.log(Object.keys(dictionary))
  var cursor = $('#cursor');

  for(var i = 0; i < word.length; i++) {
    if(word[i] == w) {
      var newWord = dictionary [ word[i]  ];
      console.log(newWord)
      cursor.before('<span class="replaced">replaced</span>')
      }
    }
}

}