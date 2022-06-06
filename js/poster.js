const fetchPosters = async () => {
    var PostersAPI = "https://treasureapptv.herokuapp.com/api/posters";
    try {
      const response = await fetch(PostersAPI);
      const responsedata = await response.json();
      if (response.status === 200) {
        var allPosters= responsedata;
        console.log("all Posters", allPosters);
  
        const PostersRenderToHTML = allPosters
          .map((poster) => {
            return `
            <div class="poster-card" title=${poster.name}>
              <a href=${poster.picture} style="height: 100%; width: 100%;">
              <img
                  src=${poster.picture} alt="Posters" width="100%" height="100%"/></a>
            </div>
            `;
          })
          .join("");
  
        document.getElementById("poster-section").innerHTML =
          PostersRenderToHTML;
      } else {
        document.getElementById("poster-section").innerHTML =
          response.statusText;
        console.log("'Something else occured", response);
      }
    } catch (error) {
      document.getElementById("poster-section").innerHTML =
      error.message;
      console.log("error here-->", error);
    }
  };
  
  fetchPosters();
  