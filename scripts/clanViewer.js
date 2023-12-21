
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
        playerName = "Zezima";

        let accordionDiv = document.createElement('div');
        accordionDiv.className = "accordion";
        
        let accordionBtn = document.createElement('button');
        accordionBtn.className = "accordion";
        accordionBtn.innerHTML = playerName;
        let panelDiv = document.createElement('div');
        panelDiv.className = "panel";
        let panelText = document.createElement('div');

        accordionDiv.append(accordionBtn, panelDiv);
        panelDiv.append(panelText);


        playerBar.appendChild(accordionDiv);

        

        playerBar.className = "clanMember"
        playerList.append(playerBar);

        // accordionBtn.innerHTML = playerName;

        var accordions = document.getElementsByClassName("accordion");
        var i;
        
        for (i = 0; i < accordions.length; i++) {
            accordions[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");
        
            /* Toggle between hiding and showing the active panel */
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }

        let skillsArray = [
                    "Total Level",
                        "Attack",
                       "Defence", 
                      "Strength",
                     "Hitpoints",
                        "Ranged",
                        "Prayer",
                         "Magic",
                       "Cooking",
                   "Woodcutting",
                     "Fletching",
                       "Fishing",
                    "Firemaking",
                      "Crafting",
                      "Smithing",
                        "Mining",
                      "Herblore",
                       "Agility",
                      "Theiving",
                        "Slayer",
                       "Farming",
                  "Runecrafting",
                        "Hunter",
                  "Construction",
        ];



        let playerSkills = new Array(23).fill(skillsArray)
        for (let i=0; i<playerSkills.length; i++) {
            let span = document.createElement('span');
            span.innerHTML = playerSkills[i];    
            span.className = "playerBarSkill";
            playerSkills[i] = span;
            panelText.appendChild(span);
        }

        console.log(playerSkills);
        // panelText.append(playerSkills);









}



