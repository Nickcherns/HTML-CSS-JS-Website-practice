
/*
    - variables
        - ul
*/

let mainPage = document.querySelector("#mainPage");


let totalMembers = document.querySelector("#totalMemb");
let playerList = document.querySelector("#playerList");
let addClanMemberBtn = document.querySelector("#addClanMemberBtn")
// let totalMemberCount = 0;

let clanMember = document.createElement("li");
let searchBar = document.createElement("input");
let emptyButton = document.createElement("button");
let emptyDiv = document.createElement("div");


let btnContainer = emptyDiv;
let addSpan = document.createElement("span");
let deleteSpan = document.createElement("span");
btnContainer.append(addSpan);
btnContainer.append(deleteSpan);

addSpan.className = "plus";
deleteSpan.className = "delete";
btnContainer.className = "playerBtnContainer"
clanMember.className = "clanMember";

addSpan.textContent = "+";
deleteSpan.textContent = "-";

searchBar.type = "text";
searchBar.placeholder = "Player Name";
searchBar.style.borderRadius = "5px";
searchBar.style.paddingLeft = "5px";



clanMember.append(searchBar);
clanMember.append(btnContainer);

playerList.appendChild(clanMember);

addClanMemberBtn.onclick = function() {
    // addPlayerBar
    // this is connected 
    // playerList.appendChild(clanMember);
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

// pressing enter key acts as 'add' click
while (searchBar.selected = true) {
    searchBar.addEventListener('keypress', function(event) {
        if(event.key === "Enter") {
            // addSpan.click();
        }
    })
    break;
}



// Click on a close button to hide the current list item
// let delete = document.getElementsByClassName("delete");
// for (let i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     let div = this.parentElement;
//     div.style.display = "none";   
//   }
// }