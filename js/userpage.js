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
  
  const fetchBTS = async () => {
    var BTSAPI = "https://treasureapptv.herokuapp.com/api/bts";
    try {
      const response = await fetch(BTSAPI);
      const responsedata = await response.json();
      if (response.status === 200) {
        var allBTS = responsedata;
        console.log("all BTS", allBTS);
  
        const BTSRenderToHTML = allBTS
          .map((bts) => {
            return `
            <div class="bts-card" >
              <a href=${bts.file} style="height: 100%; width: 100%;">
              <video width="100%" height="100%" controls>
                  <source src=${bts.file} alt="Behind the scenes" type="video/mp4"/></a>
            </div>
            `;
          })
          .join("");
  
        document.getElementById("bts-section").innerHTML =
          BTSRenderToHTML;
      } else {
        document.getElementById("bts-section").innerHTML =
          response.statusText;
        console.log("'Something else occured", response);
      }
    } catch (error) {
      document.getElementById("bts-section").innerHTML =
      error.message;
      console.log("error here-->", error);
    }
  };
  
  fetchBTS();

  const fetchCollaborations = async () => {
    var CollaborationsAPI = "https://treasureapptv.herokuapp.com/api/collab";
    try {
      const response = await fetch(CollaborationsAPI);
      const responsedata = await response.json();
      if (response.status === 200) {
        var allCollaborations = responsedata;
        console.log("all Collaborations", allCollaborations);
  
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

  
  
  const fetchEvents = async () => {
    var eventAPI = "https://treasureapptv.herokuapp.com/api/event";
    try {
      const response = await fetch(eventAPI);
      const responsedata = await response.json();
      if (response.status === 200) {
        var allEvents = responsedata;
        console.log("all events", allEvents);
  
        const eventsRenderToHTML = allEvents
          .map((events) => {
            return `<div key=${events.id} class="events-card" title=${events.name}>
          <img src=${events.picture} alt="event imagae"/>
          </div>`;
          })
          .join("");
  
        document.getElementById("events-section").innerHTML = eventsRenderToHTML;
      } else {
        document.getElementById("events-section").innerHTML = response.statusText;
        console.log("'Something else occured", response);
      }
    } catch (error) {
      console.log("error here-->", error);
    }
  };
  fetchEvents();

  
  const fetchPosters = async () => {
    var PostersAPI = "https://treasureapptv.herokuapp.com/api/poster";
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
            <div class="bts-card" >
              <a href=${soundtrack.file} style="height: 100%; width: 100%;">
              <video width="100%" height="100%" controls>
                  <source src=${soundtrack.file} alt="Soundtrack" type="video/mp4"/></a>
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
  

