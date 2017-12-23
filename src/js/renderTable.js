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
    var id;
    table.forEach(function (el) {
        if(el.id.replace("@", '') != el.id) {
            id = 'row' + el.id.replace("@", '');
            container.find('tbody').append('<tr id="' + id + '" class="number"></tr>');
            container.find('#'+id).append('<td>' + el.id.replace("@", '') + '</td>');
        } else {
            container.find('#'+id).append('<td><input type="text" value=""></td>');
        }
    });
}

export { renderTable }