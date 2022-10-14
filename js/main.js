const actors = [{
        id: 1,
        name: "John Delvin aka John D"
    },
    {
        id: 2,
        name: "Pages Acquah"
    },
    {
        id: 3,
        name: "Detective Joseph"
    },
    {
        id: 4,
        name: "Ann Marie Mensah"
    },
    {
        id: 5,
        name: "Kwesi Pepra"
    },
    {
        id: 6,
        name: "Stacey Gyan"
    },
    {
        id: 7,
        name: "Pearl Akyea"
    },
    {
        id: 8,
        name: "Hilary Djobeh"
    },
    {
        id: 9,
        name: "Jason Djobeh"
    },
    {
        id: 10,
        name: "Philip Quarshie"
    },
    {
        id: 11,
        name: "Trey Mason"
    },
    {
        id: 12,
        name: "Adjoa Kyere"
    },
    {
        id: 13,
        name: "Kofi Adjie"
    },
    {
        id: 14,
        name: "Akosua Polley"
    },
    {
        id: 15,
        name: "Isaac Acheampong"
    },
    {
        id: 16,
        name: "Alvin Bempong"
    },
    {
        id: 17,
        name: "Jasmine Adaare"
    }
]


//get alement to append html to
let cast = document.getElementById('actor-names');

// function to get screen cast
const loadScreenCast = () => {
    const allCast = actors.map((actor, index) => {
        return `<button key=${index+1} id='${actor.id}' class="actorClick" value='${actor.name}'> X </button>`
    }).join("");
    cast.innerHTML = allCast;
    let actorClickEvent = document.querySelectorAll(".actorClick");
    actorClickEvent.forEach(function(element){
        element.addEventListener('click', function(e){
            console.log(e.target.value)
            e.preventDefault();
            element.innerHTML=e.target.value;
            if(element.innerHTML===e.target.value){
                element.innerHTML=e.target.value;
                e.target.value = 'X';
            }else{
                element.innerHTML='X'}

        })
    })
  }
//on script load call func.
loadScreenCast();

// const loadScreenCast = () => {
//     const allCast = actors.map((actor, index) => {
//         return `<button key=${index+1} id='${actor.id}' class="actorClick" value=${actor.name}> X </button>`
//     }).join("");
//     cast.innerHTML = allCast;
//     let actorClickEvent = document.querySelectorAll(".actorClick");
//     let display_area = document.getElementById("DisplayArea")
//     actorClickEvent.forEach(function(element){
//         element.addEventListener('click', function(e){
//             console.log(e.target.value)
//             e.preventDefault();
//             display_area.innerHTML=e.target.value;
//         })
//     })
//   }
//   loadScreenCast();
