var searchButton = document.getElementsByClassName('search-open')[0];
var searchField = document.getElementsByClassName('search_box')[0];

searchButton.addEventListener('click', onSearchOpenClick);

function onSearchOpenClick() {
  searchField.classList.toggle('hide');
}
