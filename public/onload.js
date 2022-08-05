(function () {
    'use strict'

    document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
      document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
    relogio();
  })()

function relogio() {

    window.date = new Date();
    var hora = window.date.getHours();
    var minuto = window.date.getMinutes();
    var data=window.date.toLocaleDateString("pt-BR");

    document.getElementById('header_hora').innerHTML = hora +":"+ minuto;
    document.getElementById('header_data').innerHTML = data;

    setTimeout("relogio()",1000);
  }
  