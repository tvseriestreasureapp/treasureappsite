const fetchSoundtracks = async () => {
    var SoundtrackAPI = "https://treasureapptv.herokuapp.com/api/soundtrack";
    try {
      const response = await fetch(SoundtrackAPI);
      const responsedata = await response.json();
      if (response.status === 200) {
        var allSoundtracks= responsedata;
        console.log("all Soundtracks", allSoundtracks);
  
        const SoundtracksRenderToHTML = allSoundtracks
          .map((soundtrack) => {
            return `
            <div class="soundtrack-card" title=${soundtrack.name}>
              <a href=${soundtrack.picture} style="height: 100%; width: 100%;">
              <img
                  src=${soundtrack.picture} alt="Actors" width="100%" height="100%"/></a>
            </div>
            `;
          })
          .join("");
  
        document.getElementById("soundtrack-section").innerHTML =
          SoundtracksRenderToHTML;
      } else {
        document.getElementById("soundtrack-section").innerHTML =
          response.statusText;
        console.log("'Something else occured", response);
      }
    } catch (error) {
      document.getElementById("soundtrack-section").innerHTML =
      error.message;
      console.log("error here-->", error);
    }
  };
  
  fetchSoundtracks();
  