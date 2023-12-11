let fileView = document.querySelector('#fileview');

let searchInput = document.querySelector('#searchInput');
let searchButton = document.querySelector('#searchButton');

while (searchInput.selected = true) {
    searchInput.addEventListener('keypress', function(event) {
        if(event.key === "Enter") {
            searchButton.click();
        }
    })
    break;
}