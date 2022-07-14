let nameVal = document.getElementById('name').value;
let pictureVal = document.getElementById('picture').value;
let descriptionVal = document.getElementById("description").value;
let data = {email: emailVal, password: passwordVal };

function handlePost() {
    // console.log("We are about to submit the form");

    
    // console.log('We are submitting this data to the backend in the right one', data);
    // const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;


    fetch('https://treasureapptv.herokuapp.com/api/actor', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
        //   'X-CSRFToken': csrftoken,
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      })
      .then(response =>{
        if (response.status != 200) {
              console.log('You have a problem');
              return;
          } else {
              let goodData = response.json();
      goodData.then(data => {
        console.log('Success:', data);
      })}})
      .catch((error) => {
        console.error('Error:', error);
      });
    }



function handlePut() {
        // console.log("We are about to submit the form");
        // let nameVal = document.getElementById('name').value;
        // let pictureVal = document.getElementById('picture').value;
        // let descriptionVal = document.getElementById("description").value;
    
        // let data = {email: emailVal, password: passwordVal };
        // console.log('We are submitting this data to the backend in the right one', data);
        // const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    
    
        fetch('https://treasureapptv.herokuapp.com/api/actor/{{id}}', {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json',
            //   'X-CSRFToken': csrftoken,
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          })
          .then(response =>{
            if (response.status != 200) {
                  console.log('You have a problem');
                  return;
              } else {
                  let goodData = response.json();
          goodData.then(data => {
            console.log('Success:', data);
          })}})
          .catch((error) => {
            console.error('Error:', error);
          });
        }

function handleDelete() {

  // console.log("We are about to submit the form");
  // let nameVal = document.getElementById('name').value;
  // let pictureVal = document.getElementById('picture').value;
  // let descriptionVal = document.getElementById("description").value;

  // let data = {email: emailVal, password: passwordVal };
  // console.log('We are submitting this data to the backend in the right one', data);
  // const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;


  fetch('https://treasureapptv.herokuapp.com/api/actor', {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      //   'X-CSRFToken': csrftoken,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    .then(response =>{
      if (response.status != 204) {
            console.log('You have a problem');
            return;
        } else {
            let goodData = response.json();
    goodData.then(data => {
      console.log('Success:', data);
    })}})
    .catch((error) => {
    console.error('Error:', error);
    });
}

function handleGet() {


  // console.log("We are about to submit the form");
  // let nameVal = document.getElementById('name').value;
  // let pictureVal = document.getElementById('picture').value;
  // let descriptionVal = document.getElementById("description").value;

  // let data = {email: emailVal, password: passwordVal };
  // console.log('We are submitting this data to the backend in the right one', data);
  // const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;


  fetch('https://treasureapptv.herokuapp.com/api/actor', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      //   'X-CSRFToken': csrftoken,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    .then(response =>{
      if (response.status != 204) {
            console.log('You have a problem');
            return;
        } else {
            let goodData = response.json();
    goodData.then(data => {
      console.log('Success:', data);
    })}})
    .catch((error) => {
      console.error('Error:', error);
    });
}