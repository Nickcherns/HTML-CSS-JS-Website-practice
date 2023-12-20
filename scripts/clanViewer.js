
// variable declarations
let mainPage = document.querySelector("#mainPage");
let totalMembers = document.querySelector("#totalMemb");
let addClanMemberBtn = document.querySelector("#addClanMemberBtn");

addClanMemberBtn.addEventListener('click', addPlayerBar);

function addPlayerBar() {
    
    let playerList = document.querySelector("#playerList");
    let clanMember = document.createElement("li");
    let searchBar = document.createElement("input");
    let memberCount = document.getElementById("memberCount");

    // button container (addSpan + deleteSpan)
    let btnContainer = document.createElement("div");
    let addSpan = document.createElement("span");
    let deleteSpan = document.createElement("span");
    addSpan.textContent = "+";
    deleteSpan.textContent = "-";
    
    // append elements
    btnContainer.append(addSpan);
    btnContainer.append(deleteSpan);
    clanMember.append(searchBar);
    clanMember.append(btnContainer);
    playerList.appendChild(clanMember);  
    totalMembers.append(memberCount);

    // class names
    addSpan.className = "plus";
    deleteSpan.className = "delete";
    btnContainer.className = "playerBtnContainer"
    clanMember.className = "clanMember";

    // search bar 
    searchBar.className = "searchBar";
    searchBar.type = "text";
    searchBar.placeholder = "Player Name";
    searchBar.style.borderRadius = "5px";
    searchBar.style.paddingLeft = "5px";

    let deleteBtns = [...document.getElementsByClassName('delete')];
    let countValue = deleteBtns.length;

    // Click on a close button to hide the current list item
    // reverse for loop because deleting items may cause the loop to bug iterations
    for (let i = deleteBtns.length-1; i >= 0; --i) {
        deleteBtns[i].addEventListener('click', function() {
            let div = this.parentElement;
            let playerBar = div.parentElement;
            // actually remove the element
            playerBar.remove(); 
            // update countValue to reflect removal
            countValue = countValue - 1;
            memberCount.innerHTML = countValue;
        });
    }
    memberCount.innerHTML = countValue;


    while (searchBar.selected = true) {
        searchBar.addEventListener('keypress', function(event) {
            if(event.key === "Enter") {
                addSpan.click();
            }
        })
        break;
    }

}

addClanMember();

function addClanMember() {
    /*
        - createPlayerBar
        - this will actually search when add or Enter is pressed
        - hooked up to API 
        - Add to total member count
    */

    
        let playerList = document.querySelector("#playerList");
        let playerBar = document.createElement('li');
        let playerName = document.createElement('span');
        playerName.innerText = "Test"

        let accordionDiv = document.createElement('div');
        accordionDiv.className = "accordion";
        let accordionItemDiv = document.createElement('div')
        accordionItemDiv.className = "accordion-item";
        let accordionHeader = document.createElement('h2');
        accordionHeader.className = "accordion-header";
        let accordionButton = document.createElement('button');
        accordionButton.className = "accordion-button";

        let accordionText = document.createElement('div');
        accordionText.className = "accordion-collapse collapse show";
        accordionText.id = "accordionText";
        let accordionBody = document.createElement('div');
        accordionBody.className = "accordion-body";

        playerBar.append(accordionDiv);
            accordionDiv.append(accordionItemDiv);
                accordionItemDiv.append(accordionHeader);
                    accordionHeader.append(accordionButton);
                        accordionButton.append(playerName); 
                accordionItemDiv.append(accordionText);
                    accordionText.append(accordionBody);

        accordionButton.dataset.bsTarget = "#accordionText"
        accordionButton.dataset.bsToggle = "collapse";




        // <div class="accordion" id="accordionPanelsStayOpenExample">
        // <div class="accordion-item">
        //   <h2 class="accordion-header">
        //     <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        //       Accordion Item #1
        //     </button>
        //   </h2>
        //   <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
        //     <div class="accordion-body">
        //       <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        //     </div>
        //   </div>
        // </div>
      

        playerBar.className = "clanMember"
        playerList.append(playerBar);



}

// **pressing enter key acts as 'add' click**








