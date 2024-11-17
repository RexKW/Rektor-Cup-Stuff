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
import { link } from 'fs';

const categories = [
  {
    category: "s-box",
    image: basketball,
    items: [
      { name: "Basketball M", img: basketball, link: "https://forms.gle/1SkGtnEGq6YJSahr6" },
      { name: "Basketball F", img: basketball, link: "https://forms.gle/1SkGtnEGq6YJSahr6" },
      { name: "Futsal", img: futsal, link: "https://forms.gle/uKGENveDdoCP7trc8" },
      { name: "Billiard M", img: billiard3, link: "https://forms.gle/9HMkAHPA2FySb8HV8" },
      { name: "Billiard F", img: billiard3, link: "https://forms.gle/9HMkAHPA2FySb8HV8" },
      { name: "Badminton", img: badminton, link: "https://forms.gle/on2XGQZT8SHk1ybu9" },
    ],
  },
  {
    category: "e-box",
    items: [
      { name: "Mobile Legends", img: ml, link:"https://forms.gle/YusamXudsyttFRbUA" },
      { name: "Pubg", img: pubg, link:"https://forms.gle/QBGuNaU9yp3ZdnpT6" },
    ],
  },
  {
    category: "a-box",
    items: [
      { name: "Dance", img: dance,link:"https://forms.gle/VGvT4GWBFdjp6H5z5" },
      { name: "Band", img: band, link:"https://forms.gle/TTrK1kYNxZdTEQiF6" },
    ],
  },
  {
    category: "l-box",
    items: [
      { name: "CoC", img: coc,link:"https://forms.gle/wKu1pRb5sSzuMWFDA" },
      { name: "Debat", img: debat,link:"https://forms.gle/TkwGkGMqG9i3PDgVA" },
      { name: "Catur", img: catur,link:"https://forms.gle/WmkAvXf3bCDNrxcH9" },
    ],
  },
];

const CompetitionBoxes = () => (
  <div className="competition-boxes-container">
    {categories.map((category, index) => (
      <div className="category-boxes" key={index}>
        <img src={category.image}/>
        <div className="placeholder-boxes">
          {category.items.map((item) => (
            <a href={item.link}>
            <div className={`${category.category} placeholder-box`} key={item.name}>
              <img src={item.img} alt={item.name} />
              {item.name}
            </div>
            </a>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default CompetitionBoxes;