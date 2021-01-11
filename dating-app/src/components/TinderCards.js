import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import "../styles/TinderCards.css";

export default function TinderCards() {
  const [people, setPeople] = useState([
      {
        name: 'Chris Hemsworth',
        url: "https://i.pinimg.com/564x/44/bc/80/44bc80dc790d954411cacb698d08f396.jpg"
      },
      {
        name: 'Brad Pitt',
        url: "https://i.pinimg.com/originals/2d/1f/af/2d1faf05d22132335edaa01f8fb33dce.jpg"
      },
      {
        name: 'Elon Musk',
        url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102"
      },
      {
        name: 'Jeff Bezos',
        url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455"
      }
    ])

    const swiped = (direction, nameToDelete) => {
      console.log('You swiped: ' + nameToDelete)
    }

    const outOfFrame = (name) => {
      console.log(name + ' left the screen')
    }

  return (
    <div className='tinderCards'>
      <h1>Profile</h1>
      {/* Hello TinderCars */}
      <div className='tinderCards__cardContainer'>
        {people.map((person) => {
          return (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={dir => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
            >
            <div style={{backgroundImage: `url(${person.url})`}} className='card'
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
          )
        })}
    </div>
  </div>
  )
}