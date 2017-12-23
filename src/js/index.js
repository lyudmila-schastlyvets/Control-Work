import $ from 'jquery';
import { storage } from './storage';
import { cellInit } from './cell';
import { renderTable } from './renderTable';

$(document).ready(function () {
    cellInit();
    renderTable();
    $(document).on('blur', 'input', function () {
        var data = storage.get('tbody');
        if (data[$(this).data('key')].value != $(this).val()) {
            data[$(this).data('key')].value = $(this).val();
            storage.set('tbody', data);
        }
    })
})