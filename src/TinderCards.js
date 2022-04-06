import React, {useState} from 'react'
import TinderCard from "react-tinder-card"
import './TinderCards.css'


function TinderCards() {
    const [people,setPeople] =useState([
        {
            name:'Mada Kasler',
            url: 'https://scontent.fclj1-2.fna.fbcdn.net/v/t1.6435-9/48425682_2290148177675943_1816071125193457664_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3m5_DPuiVGUAX9ggcqX&_nc_ht=scontent.fclj1-2.fna&oh=00_AT8gckoovATeFG74X-VN5KZ1gHT-fPeQ3wOMdpqrdPYh_w&oe=6274B4F7'
        },
        {
            name:'Vlad Balcanu',
            url: 'https://media-exp1.licdn.com/dms/image/C4E35AQG8jUwqnHAaaA/profile-framedphoto-shrink_800_800/0/1616345699231?e=1649329200&v=beta&t=mA7_nm-qutQJI1zO0GFBDIN0HEfEF1c93tPe0ZrAOO0'
        },
        {
            name:'Izabella Bartalus',
            url: 'https://media-exp1.licdn.com/dms/image/C4E03AQH9lhpf4DdRQg/profile-displayphoto-shrink_800_800/0/1620422682257?e=1654732800&v=beta&t=OeCbx34mMdqNUkoZ9S2L4kB2WFvZ8jMi_t8wIL7p_jA'
        },
        
        {
            name:'Giurca Sebastian',
            url: 'https://media-exp1.licdn.com/dms/image/C4D03AQEfH8t4DHKb9g/profile-displayphoto-shrink_800_800/0/1642766390839?e=1654732800&v=beta&t=2oKIrL-cKyti7h0xjR7RuTDJkhiUU7Po5r5rIh8uXNo'
        },
        {
            name:'Luiza Petrusel',
            url: 'https://media-exp1.licdn.com/dms/image/C4E03AQEhV9GpBYNylQ/profile-displayphoto-shrink_800_800/0/1647681434681?e=1654732800&v=beta&t=sLFwKjR8_CYF-u4zAqZlyyGQWNgsihFYQhledZRe8LI'
        }
        
    ]);

  return (
    <div>
            
            <div className="tinderCards__cardContainer">
                {people.map(person=> (
                    <TinderCard className="swipe" key={person.name} preventSwipe={["up","down"]}>
                        <div
                            style={{ backgroundImage: `url(${person.url})`}} 
                            className="card">
                            <h3>
                                {person.name}
                             </h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
    </div>
  )
}

export default TinderCards