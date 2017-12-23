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
    $(document).on('click', 'input', function () {
        var data = storage.get('tbody');
        $('#font-size').val(data[$(this).data('key')].fontSize);
        $('.active').removeClass('active');
        $(this).addClass('active');
    })
    $(document).on('change', '#font-size', function () {
        var data = storage.get('tbody');
        if ($('input').hasClass('active')) {
            $('.active').css('font-size', $(this).val()+'px');
            data[$('.active').data('key')].fontSize = $(this).val();
            storage.set('tbody', data);
        }
    })
})