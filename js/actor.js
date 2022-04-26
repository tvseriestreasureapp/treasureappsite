//Get all actors and actresses


const getActors = async () => {
    let actorURL = `http://127.0.0.1:8000/api/actor/`;
    try {
      const response = await fetch(actorURL);
      const responsedata = await response.json();
      if (response.status === 200) {
        const actorData = responsedata.splice(0, 8);
  
        //All best players -- API response returns challenger & grand masters only
        let mappedPlayers;
        //map data to html element
        bestPlayers.length === 0
          ? (mappedPlayers = `<span class="no-player-data">No best players for this champion.</span>`)
          : (mappedPlayers = bestPlayers
              .map((bests, index) => {
                return `
            <tr key=${index}>
              <td>${bests?.summoner}</td>
              <td>${bests?.winrate}%</td>
              <td>${bests?.rank}</td>
              <td>${bests?.played}</td>
            </tr>
          `;
              })
              .join(""));
  
        document.getElementById("best-plays-body").innerHTML = mappedPlayers;
      } else if (response.status === 404) {
        // document.getElementById("loader").innerHTML = response.statusText;
        console.log("no data found");
      } else if (response.status === 401 || 403) {
        console.log("Client not permitted to access requested resources");
      } else {
        console.log("An unknown error occured");
      }
    } catch (error) {
      console.log(error);
    }
  };