import $ from 'jquery';
// import { storage } from './storage';
import { cellInit } from './cell';
import { renderTable } from './renderTable';

$(document).ready(function () {
    cellInit();
    renderTable();
})