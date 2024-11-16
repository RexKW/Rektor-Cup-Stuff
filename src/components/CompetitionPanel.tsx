import React from 'react';
import '../styles/CompetitionPanel.css';


import basketball from '../assets/rektor-img/basketball.svg';
import futsal from '../assets/rektor-img/futsal.svg';
import billiard3 from '../assets/rektor-img/billiard.svg';
import badminton from '../assets/rektor-img/badminton.svg';
import ml from '../assets/rektor-img/ml.svg';
import pubg from '../assets/rektor-img/pubg.svg';
import dance from '../assets/rektor-img/dance.svg';
import band from '../assets/rektor-img/band.svg';
import coc from '../assets/rektor-img/coc.svg';
import debat from '../assets/rektor-img/debat.svg';
import catur from '../assets/rektor-img/chess.svg';

const categories = [
  {
    category: "s-box",
    items: [
      { name: "Basketball", img: basketball },
      { name: "Futsal", img: futsal },
      { name: "Billiard", img: billiard3 },
      { name: "Badminton", img: badminton },
    ],
  },
  {
    category: "e-box",
    items: [
      { name: "Mobile Legends", img: ml },
      { name: "Pubg", img: pubg },
    ],
  },
  {
    category: "a-box",
    items: [
      { name: "Dance", img: dance },
      { name: "Band", img: band },
    ],
  },
  {
    category: "l-box",
    items: [
      { name: "CoC", img: coc },
      { name: "Debat", img: debat },
      { name: "Catur", img: catur },
    ],
  },
];

const CompetitionBoxes = () => (
  <div className="competition-boxes-container">
    {categories.map((category, index) => (
      <div className="category-boxes" key={index}>
        <div className="placeholder-boxes">
          {category.items.map((item) => (
            <div className={`${category.category} placeholder-box`} key={item.name}>
              <img src={item.img} alt={item.name} />
              {item.name}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default CompetitionBoxes;