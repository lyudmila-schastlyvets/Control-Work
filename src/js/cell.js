import { storage } from './storage';

function cellInit () {
    if (storage.get('tbody')) {
        return true;
    }
    var tableCells = [];
    var tableHead = [];
    for (var i=0; i <= 100; i++) {
        for (var j=0; j <= 100; j++) {
            if(j > 26) {
                if (j%26 == 0) {
                    var letter = String.fromCharCode(("A".charCodeAt(0) + parseInt(j/27) - 1));
                    letter += String.fromCharCode("A".charCodeAt(0) + 25);
                } else {
                    var letter = String.fromCharCode(("A".charCodeAt(0) + parseInt(j/26) - 1));
                    letter += String.fromCharCode("A".charCodeAt(0) + j%26 - 1);
                }
            } else {
                var letter = String.fromCharCode("A".charCodeAt(0)+j-1);
            }
            var id = letter + i;
            var cell = {
                id: id,
                letter: letter,
                number: i,
                value: '',
                cellColor: 'black',
                background: 'white',
                fontSize: '12'
            }
            if (i == 0) {
                tableHead.push(cell);
            } else {
                tableCells.push(cell);
            }
        }
    }
    storage.set('tbody', tableCells)
    storage.set('thead', tableHead)
}

export { cellInit }