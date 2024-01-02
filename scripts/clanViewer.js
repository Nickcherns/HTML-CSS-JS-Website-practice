

// CURRENT ISSUE/SITUATION:
/*
    -- API connects need serious review 
    -- clanMember search will produce multiple playerBars off one container 
          -- it should convert its container into a playerBar rather than produce one

  PLAYER BAR: 
    -- playerBar needs styling for better readability
    -- playerBar needs images for each skill
    -- playerBar needs a 'more info' type button/tag to show that you can open
          each player bar for more info
    -- playerBar has weird 'hover' (bug?): hover may be attached to wrong elements
    -- playerBar needs a delete button 
*/







// variable declarations
let mainPage = document.querySelector("#mainPage");
let totalMembers = document.querySelector("#totalMemb");
let addClanMemberBtn = document.querySelector("#addClanMemberBtn");

addClanMemberBtn.addEventListener('click', addClanMember);

function addClanMember() {
    
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
    addSpan.id = "plusButton";
    deleteSpan.className = "delete";
    btnContainer.className = "playerBtnContainer"
    clanMember.className = "clanMember";

    // search bar 
    searchBar.className = "searchBar";
    searchBar.id = "searchBar"
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

    // enter key press acts as click for add/search
    while (searchBar.selected = true) {
        searchBar.addEventListener('keypress', function(event) {
            if(event.key === "Enter") {
                addSpan.click();
            }
        })
        break;
    }

}

function addPlayerBar() {
    /*
        - createPlayerBar
        - this will actually search when add or Enter is pressed
        - hooked up to API 
        - Add to total member count
    */

    let skillsArray = [
      "Total Level", "Attack",
          "Defence", "Strength",
        "Hitpoints", "Ranged",
            "Prayer", "Magic",
          "Cooking", "Woodcutting",
        "Fletching", "Fishing",
        "Firemaking", "Crafting",
          "Smithing", "Mining",
          "Herblore", "Agility",
          "Theiving", "Slayer",
          "Farming", "Runecrafting",
            "Hunter", "Construction",
    ];

    let playerList = document.querySelector("#playerList");
    let playerBar = document.createElement('li');
    playerBar.className = "clanMember"

    let accordionDiv = document.createElement('div');
    accordionDiv.className = "accordion";
    
    // accordionBtn.innerHTML will hold the player name from searchBar
    let accordionBtn = document.createElement('button');
    accordionBtn.className = "accordion";
    accordionBtn.innerHTML = "";

    let panelDiv = document.createElement('div');
    let panelText = document.createElement('div');
    panelDiv.className = "panel";

    playerList.append(playerBar);
      playerBar.appendChild(accordionDiv);
        accordionDiv.append(accordionBtn, panelDiv);
          panelDiv.append(panelText);
    
    let accordions = document.getElementsByClassName("accordion");
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
    
        // panel toggle (hidden / active)
        let panel = this.nextElementSibling;
        if (panel) {
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        }
      });
  }

  
  // add skills as span to playerBar panel
  let playerSkills = new Array(skillsArray.length)
  for (let i=0; i<playerSkills.length; i++) {
      let span = document.createElement('span');
      span.innerHTML = skillsArray[i] + ": ";    
      span.id = skillsArray[i].toLowerCase;
      span.className = "playerBarSkill";
      playerSkills[i] = span;
      panelText.appendChild(span);
  }


}

// addPlayerBar();


export { addPlayerBar };