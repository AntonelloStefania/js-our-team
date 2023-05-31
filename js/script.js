

const team=[
    {
        "name":"Wayne Barnett",
        "role":"Founder & CEO",
        "image":"wayne-barnett-founder-ceo.jpg"
    },

    {
        "name":"Angela Caroll",
        "role":"Chief Editor",
        "image":"angela-caroll-chief-editor.jpg"
    },

    {
        "name":"Walter Gordon",
        "role":"Office Manager",
        "image":"walter-gordon-office-manager.jpg"
    },

    {
        "name":"Angela Lopez",
        "role":"Social Media Manager",
        "image":"angela-lopez-social-media-manager.jpg"
    },

    {
        "name":"Scott Estrada",
        "role":"Developer",
        "image":"scott-estrada-developer.jpg"
    },
    {
        "name":"Barbara Ramos",
        "role":"Graphic Designer",
        "image":"barbara-ramos-graphic-designer.jpg"
    }
]

console.log(team)

//recupero elemento DOM
const main_container = document.getElementById('main');

//ciclo array-team
for(let i=0; i<team.length;i++){
    let member=team[i];
    console.log(member)

   let card=  `<div class="card width filter" >
                    <img class="card-img-top" src="./img/${member.image}" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">${member.name}</h5>
                      <p class="card-text">${member.role}</p>
                    </div>
                  </div>
                </div>`

    main_container.innerHTML+=card;
    
    //prova pulsante carosello cards
    let active_card=0;
    
    let all_cards= document.getElementsByClassName('card')
    all_cards[active_card].classList.add('z-index-max')
    all_cards[active_card].classList.remove('filter')
    const btn_next= document.getElementById('btn-next').
    addEventListener('click', function(){
        
        all_cards[active_card].classList.add('filter')
        all_cards[active_card].classList.remove('z-index-max')
        active_card++
        
            for(let i=0; i<team.length; i++){
                if(active_card >= all_cards.length){
                    active_card=0
                } 
            }
            
            all_cards[active_card].classList.add('z-index-max');
            all_cards[active_card].classList.remove('filter')
    })
}