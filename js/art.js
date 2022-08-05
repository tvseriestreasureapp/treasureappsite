const fetchArts = async () => {
    var artAPI = "https://treasureapptv.herokuapp.com/api/art";
    try {
      const response = await fetch(artAPI);
      const responsedata = await response.json();
      if (response.status === 200) {
        var allArts = responsedata;
        console.log("all events", allArts);
  
        const artsRenderToHTML = allArts
          .map((arts) => {
            return `<div key=${arts.id} class="arts-design-card" title=${arts.name}>
          <img src=${arts.picture} alt="event image" height= "100%" width= "100%"/>
          </div>`;
          })
          .join("");
  
        document.getElementById("arts-section").innerHTML = artsRenderToHTML;
      } else {
        document.getElementById("arts-section").innerHTML = response.statusText;
        console.log("'Something else occured", response);
      }
    } catch (error) {
      console.log("error here-->", error);
    }
  };
  fetchArts();
  