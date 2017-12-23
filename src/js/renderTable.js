import $ from 'jquery';
import { storage } from './storage';

function renderTable () {
    var container = $('table');
    var table = storage.get('tbody');
    var thead = storage.get('thead');
    container.find('thead').append('<tr></tr>');
    thead.forEach(function (el) {
        container.find('thead tr').append('<th>' + el.letter + '</th>')
    });
    var rowId;
    table.forEach(function (el, key) {
        if(el.id.replace("@", '') != el.id) {
            rowId = 'row' + el.number;
            container.find('tbody').append('<tr id="' + rowId + '"></tr>');
            container.find('#'+rowId).append('<td class="number">' + el.number + '</td>');
        } else {
            container
                .find('#'+rowId)
                .append('<td><input ' +
                    'type="text" ' +
                    'value="' + el.value + '" ' +
                    'data-key="' + key + '" ' +
                    'style="font-size:' + el.fontSize + 'px; color: ' + el.cellColor + '; background-color: ' +
                     el.background + '" ></td>');
        }
    });
}

export { renderTable }