const fetchCollaborations = async () => {
  var CollaborationsAPI = "https://treasureapptv.herokuapp.com/api/collab";
  try {
    const response = await fetch(CollaborationsAPI);
    const responsedata = await response.json();
    if (response.status === 200) {
      var allCollaborations = responsedata;
      console.log("all Collaborations", Collaborations);

      const CollaborationsRenderToHTML = allCollaborations
        .map((collabs) => {
          return `
          <div class="collab-card" title=${collabs.name}>
            <a href=${collabs.picture} style="height: 100%; width: 100%;">
            <img
                src=${collabs.picture} alt="Collaborations" width="100%" height="100%"/></a>
          </div>
          `;
        })
        .join("");

      document.getElementById("collaborations-section").innerHTML =
        CollaborationsRenderToHTML;
    } else {
      document.getElementById("collaborations-section").innerHTML =
        response.statusText;
      console.log("'Something else occured", response);
    }
  } catch (error) {
    document.getElementById("collaborations-section").innerHTML =
    error.message;
    console.log("error here-->", error);
  }
};

fetchCollaborations();
