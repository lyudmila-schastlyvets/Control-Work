import $ from 'jquery';
// import { storage } from './storage';

$(document).ready(function () {
    var tableCells = [];
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
                value: '',
                cellColor: 'black',
                background: 'white',
                fontSize: '12'
            }
            tableCells.push(cell);
        }
    }
    console.log(tableCells);
})