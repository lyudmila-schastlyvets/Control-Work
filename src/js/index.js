import $ from 'jquery';
import { colorpicker } from 'bootstrap-colorpicker';
import { storage } from './storage';
import { cellInit } from './cell';
import { renderTable } from './renderTable';

$(document).ready(function () {
    $('#mycp').colorpicker();
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
        var el = data[$(this).data('key')];
        $('#font-size').val(el.fontSize);
        $('#font-color').val(data[$(this).data('key')].cellColor);
        $('#background-color').val(data[$(this).data('key')].background);
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
    $(document).on('change', '#font-color', function () {
        var data = storage.get('tbody');
        if ($('input').hasClass('active')) {
            $('.active').css('color', $(this).val());
            data[$('.active').data('key')].cellColor = $(this).val();
            storage.set('tbody', data);
        }
    })
    $(document).on('change', '#background-color', function () {
        var data = storage.get('tbody');
        if ($('input').hasClass('active')) {
            $('.active').css('background-color', $(this).val());
            data[$('.active').data('key')].background = $(this).val();
            storage.set('tbody', data);
        }
    })
})