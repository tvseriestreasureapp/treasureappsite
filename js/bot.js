var allBots;
const alternatives = ["Try again", "Can you come again?", "Go On..."]

const fetchBot = async () => {
  var BotAPI = "https://treasureapptv.herokuapp.com/api/bot";
  try {
    const response = await fetch(BotAPI);
    const responsedata = await response.json();
    if (response.status === 200) {
      allBots = responsedata;
      console.log("all Bots", allBots);
      const inputField = document.getElementById("input");
      inputField.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
          let input = inputField.value;
          inputField.value = "";
          output(input);
        }
      });

      let enterButton = document.getElementById("enterbutton")
      enterButton.addEventListener("click", (e) => {
        let input = inputField.value;
        inputField.value = "";
        output(input);

      })
    } else {
      console.log("There is no data")
    }
  } catch (error) {
    console.log("error here-->", error);
  }
};

fetchBot();

// const inputField = document.getElementById("input");
// inputField.addEventListener("keydown", (e) => {
//   if (e.code === "Enter") {
//     let input = inputField.value;
//     inputField.value = "";
//     output(input);
//   }
// });

function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text
    .replace(/ a /g, " ")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");
  const utterances = []
  const answers = []
  for (let y = 0; y < allBots.length; y++) {
    utterances.push(allBots[y].questions)
    answers.push(allBots[y].answers)
  }

  console.log(utterances)


  if (compare(utterances, answers, text)) {
    // Search for exact match in triggers
    product = compare(utterances, answers, text);
  } else {
    product = alternatives[Math.floor(Math.random() * alternatives.length)];
  }

  addChatEntry(input, product);
}

function compare(utterancesArray, answersArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < utterancesArray.length; x++) {
    for (let y = 0; y < utterancesArray[x].length; y++) {
      if (utterancesArray[x][y] === string) {
        let replies = answersArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}

function addChatEntry(input, product) {
  const messagesContainer = document.getElementById("messages");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botDiv.className = "bot response";
  let botImage = document.createElement('img')
  botImage.id = "botimage"
  botImage.src = "../images/chaticons.png"
  botImage.alt = "chaticon"
  botDiv.appendChild(botImage)
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  messagesContainer.appendChild(botDiv);

  messagesContainer.scrollTop =
    messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    botText.innerText = `${product}`;
  }, 2000);
}