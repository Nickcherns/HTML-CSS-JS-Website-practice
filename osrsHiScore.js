// attach osrs API 
// enter player name and return skill levels and experience
// OSRS HiScore API: https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=X


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
        let response = await fetch("https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=" + player);

        // throw error on invalid api fetch
        if (!response.ok) {
            throw new console.error("Network Response error has occured");
        }

        // split response into lines and take first 5 lines
        let playerStatsText = await response.text();
        let playerStatsArray = playerStatsText.split("\n");

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
(async () => {
    let returnedPlayer = await logPlayer("huffingSalts");
    console.log(returnedPlayer); // Access the updated playerArray here

    let displayText = JSON.stringify(returnedPlayer);
        

    document.getElementById("apiTest").innerText = displayText;
})();

