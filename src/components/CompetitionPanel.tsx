
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
import sport from '../assets/SportsCategory.svg';
import art from '../assets/ArtCategory.svg'
import learning from '../assets/LearningCategory.svg'
import esports from '../assets/EsportsCategory.svg'



const categories = [
  {
    category: "s-box",
    image: sport,
    items: [
      { name: "Basketball (L)", img: basketball, link: "/Guidebook/Guidebook Rektor Cup 2025 - Basket Putra 5x5.pdf" },
      { name: "Basketball (P)", img: basketball, link: "/Guidebook/Guidebook Basket 3x3 Putri.pdf" },
      { name: "Futsal", img: futsal, link: "/Guidebook/Guidebook Futsal Rektor Cup 2025.pdf" },
      { name: "Billiard (L)", img: billiard3, link: "/Guidebook/Guidebook Rektor Cup 2025 - Billiard Putra.pdf" },
      { name: "Billiard (P)", img: billiard3, link: "/Guidebook/Guidebook Rektor Cup 2025 - Billiard Putri.pdf" },
      { name: "Badminton", img: badminton, link: "/Guidebook/Guidebook Badminton Rektor Cup 2025.docx.pdf" },
    ],
  },
  {
    category: "e-box",
    image: esports,
    items: [
      { name: "Mobile Legends", img: ml, link:"/Guidebook/Guidebook MLBB Rektor Cup 2025.docx.pdf" },
      { name: "Pubg", img: pubg, link:"/Guidebook/PUBG Guidebook Rektor Cup 2025.docx (1).pdf" },
    ],
  },
  {
    category: "a-box",
    image: art,
    items: [
      { name: "Dance", img: dance,link:"/Guidebook/Guidebook Rektor Cup 2025 - Dance.pdf" },
      { name: "Band", img: band, link:"/Guidebook/Guidebook Rektor Cup 2025 - Band.pdf" },
    ],
  },
  {
    category: "l-box",
    image: learning,
    items: [
      { name: "CoC", img: coc,link:"/Guidebook/Guidebook Rektor Cup 2025 - Cerdas Cermat.pdf" },
      { name: "Debat", img: debat,link:"/Guidebook/Guidebook Debat rektor cup.pdf" },
      { name: "Catur", img: catur,link:"/Guidebook/Guidebook Rektor Cup 2025 - Catur.pdf" },
    ],
  },
];

const CompetitionBoxes = () => (
  <div className="competition-boxes-container">
    {categories.map((category, index) => (
      <div className="category-boxes" key={index}>
        <img src={category.image} className='categoryIcons'/>
        <div className="placeholder-boxes mt-5">
          {category.items.map((item) => (

            <a href={item.link} download target="_blank" rel="noopener noreferrer">
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