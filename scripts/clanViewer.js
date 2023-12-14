
/*
    - variables
        - ul
*/

let mainPage = document.querySelector("#mainPage");


let totalMembers = document.querySelector("#totalMemb");
let playerList = document.querySelector("#playerList");
let totalMemberCount = clanMemberCount;

let clanMember = document.createElement("li");
let searchBar = document.createElement("input");
let emptyButton = document.createElement("button");
let emptyDiv = document.createElement("div");
let emptySpan = document.createElement("span");

let plusSpan = emptySpan;
plusSpan.className = "plus";

clanMember.className = "clanMember";


let addBtn =  emptyButton.appendChild(plusSpan);
                
let deleteBtn = emptyButton;

searchBar.type = "text";
searchBar.placeholder = "Player Name";



clanMember.appendChild(addBtn);

playerList.appendChild(clanMember);

function createPlayerBar() {
    /*
        - create li with search bar that connects to api
        - will need an add / delete button
    */
    
}

function addClanMember() {
    
    /*
        - createPlayerBar
        - this will actually search when add or Enter is pressed
        - hooked up to API 
        - Add to total member count
    */
}



// Click on a close button to hide the current list item
// let delete = document.getElementsByClassName("delete");
// for (let i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     let div = this.parentElement;
//     div.style.display = "none";   
//   }
// }