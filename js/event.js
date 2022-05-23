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
