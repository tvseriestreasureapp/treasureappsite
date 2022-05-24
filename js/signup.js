function handleSignup() {
    // console.log("We are about to submit the form");
    let usernameVal = document.getElementById('name').value;
    let emailVal = document.getElementById('email').value;
    let passwordVal = document.querySelector('#password').value;
    
    let data = {name: usernameVal  ,email: emailVal, password: passwordVal };
    console.log('We are submitting this data to the backend in the right one', data);
    // const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    // console.log(csrftoken)

    fetch('https://treasureapptv.herokuapp.com/api/signup/', {
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
        if (response.status != 201) {
              console.log('You have a problem');
              return;
          } else {
              let goodData = response.json();
      goodData.then(data => {
        console.log('Success:', data);
        localStorage.setItem('user_id', data.id)
        window.location.href = '../html/login.html';
      })}})
      .catch((error) => {
        console.error('Error:', error);
      });

}

function showPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}