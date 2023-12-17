
// variable declarations
let mainPage = document.querySelector("#mainPage");
let totalMembers = document.querySelector("#totalMemb");
let addClanMemberBtn = document.querySelector("#addClanMemberBtn");
let deleteBtns = document.getElementsByClassName("delete");

let countValue = deleteBtns.length;

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


    let memberCount = document.getElementById("memberCount");

    // need countValue to 'refresh' everytime 
    //          something is added/deleted
    
    memberCount.innerHTML = ++countValue;
    
    // console.log(countValue);

    playerList.appendChild(clanMember);  
    totalMembers.append(memberCount);

    for (let i = 0; i < deleteBtns.length; ++i) {
        deleteBtns[i].addEventListener('click', function() {
            // need to actually remove the elements 
            //      rather than hide them

            // apparently this isnt actually an array 
            //      and splice will never work?
            deleteBtns
            let div = this.parentElement;
            let playerBar = div.parentElement;
            playerBar.style.display = "none"; 
        })
    }

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




