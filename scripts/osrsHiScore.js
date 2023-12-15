// attach osrs API 
// enter player name and return skill levels and experience
// OSRS HiScore API: https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=X

let player = null;

// playerSearch search bar onclick 
document.getElementById("searchButton").onclick = function() {

  let searchInput = document.getElementById("searchInput");

  // soft validation check
  if(searchInput.length  < 1) {
    alert("Please enter a valid player name...");
    console.log("Please enter a valid player name...")
    return;
  } 

  player = searchInput.value.toLowerCase();
  console.log(player); // DEBUG: value check

  searchInput.value = "";
  apiSearch();
}

// clanViewer playerBar search bar onclick
document.getElementById("addSpan").onclick = function() {

  let searchInput = document.getElementById("searchBar");

  // soft validation check
  if(searchInput.length  < 1) {
    alert("Please enter a valid player name...");
    console.log("Please enter a valid player name...")
    return;
  } 

  player = searchInput.value.toLowerCase();
  console.log(player); // DEBUG: value check

  searchInput.value = "";
  apiSearch();
}






let skillNames = [ "Total Level",
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

let playerArray = {
    "Total Level": null,
         "Attack": null,
        "Defence": null, 
       "Strength": null,
      "Hitpoints": null,
         "Ranged": null,
         "Prayer": null,
          "Magic": null,
        "Cooking": null,
    "Woodcutting": null,
      "Fletching": null,
        "Fishing": null,
     "Firemaking": null,
       "Crafting": null,
       "Smithing": null,
         "Mining": null,
       "Herblore": null,
        "Agility": null,
       "Theiving": null,
         "Slayer": null,
        "Farming": null,
   "Runecrafting": null,
         "Hunter": null,
   "Construction": null,

}



async function logPlayer(player) {
    try {
        let response = await fetch("http://localhost:3000/osrsApi/" + player);

        // throw error on invalid api fetch
        if (!response.ok) {
            throw new console.error("Network Response error has occured");
        }

        // split response into lines
        let playerStatsText = await response.text();
        let playerStatsArray = playerStatsText.split("\n");
        // 24 lines (skills) to be split 
        for (let i= 0; i < 24; i++) {
            let entry = playerStatsArray[i];
            let entryLvl = entry.split(",");

            // Update playerArray based on the entryLvl values
            let skillLevel = parseInt(entryLvl[1]); // Assuming the skill level is at index 1
            playerArray[skillNames[i]] = skillLevel;
        }
        return (playerArray);
    } catch (error) {
        console.error("Error fetching player data: ", error)
    }

  }

// wait for logPlayer to complete before displaying result
function apiSearch() {
  (async () => {
      let returnedPlayer = await logPlayer(player);
      
      console.log(returnedPlayer["Total Level"]); // DEBUG: value check

      // array data -> variables
      let totalLevel = returnedPlayer["Total Level"].toString().trim();
      let attack = returnedPlayer["Attack"].toString().trim();
      let defence = returnedPlayer["Defence"].toString().trim();
      let strength = returnedPlayer["Strength"].toString().trim();
      let hitpoints = returnedPlayer["Hitpoints"].toString().trim();
      let ranged = returnedPlayer["Ranged"].toString().trim();
      let prayer = returnedPlayer["Prayer"].toString().trim();
      let magic = returnedPlayer["Magic"].toString().trim();
      let cooking = returnedPlayer["Cooking"].toString().trim();
      let woodcutting = returnedPlayer["Woodcutting"].toString().trim();
      let fletching = returnedPlayer["Fletching"].toString().trim();
      let fishing = returnedPlayer["Fishing"].toString().trim();
      let firemaking = returnedPlayer["Firemaking"].toString().trim();
      let crafting = returnedPlayer["Crafting"].toString().trim();
      let smithing = returnedPlayer["Smithing"].toString().trim();
      let mining = returnedPlayer["Mining"].toString().trim();
      let herblore = returnedPlayer["Herblore"].toString().trim();
      let agility = returnedPlayer["Agility"].toString().trim();
      let theiving = returnedPlayer["Theiving"].toString().trim();
      let slayer = returnedPlayer["Slayer"].toString().trim();
      let farming = returnedPlayer["Farming"].toString().trim();
      let runecrafting = returnedPlayer["Runecrafting"].toString().trim();
      let hunter = returnedPlayer["Hunter"].toString().trim();
      let construction = returnedPlayer["Construction"].toString().trim();
      // variables -> html 
      document.getElementById("totalLevel").innerHTML = totalLevel;
      document.getElementById("attack").innerHTML = attack;
      document.getElementById("defence").innerHTML = defence;
      document.getElementById("strength").innerHTML = strength;
      document.getElementById("hitpoints").innerHTML = hitpoints;
      document.getElementById("ranged").innerHTML = ranged;
      document.getElementById("prayer").innerHTML = prayer;
      document.getElementById("magic").innerHTML = magic;
      document.getElementById("cooking").innerHTML = cooking;
      document.getElementById("woodcutting").innerHTML = woodcutting;
      document.getElementById("fletching").innerHTML = fletching;
      document.getElementById("fishing").innerHTML = fishing;
      document.getElementById("firemaking").innerHTML = firemaking;
      document.getElementById("crafting").innerHTML = crafting;
      document.getElementById("smithing").innerHTML = smithing;
      document.getElementById("mining").innerHTML = mining;
      document.getElementById("herblore").innerHTML = herblore;
      document.getElementById("agility").innerHTML = agility;
      document.getElementById("theiving").innerHTML = theiving;
      document.getElementById("slayer").innerHTML = slayer;
      document.getElementById("farming").innerHTML = farming;
      document.getElementById("runecrafting").innerHTML = runecrafting;
      document.getElementById("hunter").innerHTML = hunter;
      document.getElementById("construction").innerHTML = construction;

      // capitalize first letter of player
      firstLetter = player.charAt(0);
      firstPlayerLetter = firstLetter.toUpperCase();
      remainingPlayerLetters = player.slice(1);
      properPlayer = firstPlayerLetter + remainingPlayerLetters;

      //update player name on page
      document.getElementById("playerName").innerHTML = properPlayer;
  })();
}
