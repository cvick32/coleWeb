$(document).ready(main);

function main() {
  $('.header').hide();
  $('.header').fadeIn(2000);
}

function widen(idName) {
  document.getElementsByID(idName).style.height = '200px';
}

function hoverOver(idName, idNameDiv) {
  document.getElementById(idNameDiv).style.background = '#6882ad';

}

function mouseOut(idName, idNameDiv) {
  document.getElementById(idNameDiv).style.background = '';
}
