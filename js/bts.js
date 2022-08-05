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
  