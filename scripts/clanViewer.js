
// variable declarations
let mainPage = document.querySelector("#mainPage");
let totalMembers = document.querySelector("#totalMemb");
let addClanMemberBtn = document.querySelector("#addClanMemberBtn");
// let totalMemberCount = 0;

addClanMemberBtn.addEventListener('click', addPlayerBar);

function addPlayerBar() {

    // each playerBar has to be different, 
        // what if we put copies in an array? then append the array?
    
    let playerList = document.querySelector("#playerList");
    let clanMember = document.createElement("li");
    let searchBar = document.createElement("input");
    // button container (addSpan + deleteSpan)
    let btnContainer = document.createElement("div");
    let addSpan = document.createElement("span");
    let deleteSpan = document.createElement("span");
    addSpan.textContent = "+";
    deleteSpan.textContent = "-";
    
    // attach elements
    btnContainer.append(addSpan);
    btnContainer.append(deleteSpan);
    clanMember.append(searchBar);
    clanMember.append(btnContainer);

    // class names
    addSpan.className = "plus";
    deleteSpan.className = "delete";
    btnContainer.className = "playerBtnContainer"
    clanMember.className = "clanMember";

    // search bar 
    searchBar.type = "text";
    searchBar.placeholder = "Player Name";
    searchBar.style.borderRadius = "5px";
    searchBar.style.paddingLeft = "5px";

    playerList.appendChild(clanMember);  
    // console.log(deleteBtn.length);

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
// while (searchBar.selected = true) {
//     searchBar.addEventListener('keypress', function(event) {
//         if(event.key === "Enter") {
//             // addSpan.click();
//         }
//     })
//     break;
// }



// Click on a close button to hide the current list item
let deleteBtn = document.getElementsByClassName("delete");

// this does not work  ???
for (let i=0; i < deleteBtn.length; i++) {
    deleteBtn[i].onclick = function() {
        let div = this.parentNode;
        div.style.display = "none"; 
        div.style.color = "purple";
    };
};