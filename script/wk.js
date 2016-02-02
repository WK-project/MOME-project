var searchButton = document.getElementsByClassName('search-open')[0];
var searchField = document.getElementsByClassName('search_box')[0];

searchButton.addEventListener('click', onSearchOpenClick);

function onSearchOpenClick() {
  searchField.classList.toggle('hide');
}

$(document).ready(function(){

  $('div.dropdown').each(function() {
    var $dropdown = $(this);

    $("a.dropdown-link", $dropdown).hover(function(e) {
      e.preventDefault();
      $div = $("div.dropdown-container", $dropdown);
      $div.toggle();
      $("div.dropdown-container").not($div).hide();
      return false;
    });

});

  $('html').hover(function(){
    $("div.dropdown-container").hide();
  });

});
