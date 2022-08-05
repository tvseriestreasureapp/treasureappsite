const fetchActors = async () => {
  var ActorsAPI = "https://treasureapptv.herokuapp.com/api/actor";
  try {
    const response = await fetch(ActorsAPI);
    const responsedata = await response.json();
    if (response.status === 200) {
      var allActors= responsedata;
      console.log("all Actors", allActors);

      const ActorsRenderToHTML = allActors
        .map((actors) => {
          return `
          <div class="actors-actress-card" title=${actors.name}>
            <a href=${actors.picture} style="height: 100%; width: 100%;">
            <img
                src=${actors.picture} alt="Actors" width="100%" height="100%"/></a>
          </div>
          `;
        })
        .join("");

      document.getElementById("actors-section").innerHTML =
        ActorsRenderToHTML;
    } else {
      document.getElementById("actors-section").innerHTML =
        response.statusText;
      console.log("'Something else occured", response);
    }
  } catch (error) {
    document.getElementById("actors-section").innerHTML =
    error.message;
    console.log("error here-->", error);
  }
};

fetchActors();
