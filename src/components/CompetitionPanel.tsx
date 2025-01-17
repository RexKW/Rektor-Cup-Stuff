
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
      { name: "Basketball (L)", img: basketball, link: "https://forms.gle/nVqUyANvx5bGbvQ4A" },
      { name: "Basketball (P)", img: basketball, link: "https://forms.gle/1BLvpCv7jdSik3a79" },
      { name: "Futsal", img: futsal, link: "https://forms.gle/6WXYUYVF2rejQCu78" },
      { name: "Billiard (L)", img: billiard3, link: "https://forms.gle/Yd32EwckJgTRaYUd9" },
      { name: "Billiard (P)", img: billiard3, link: "https://forms.gle/Tp6Jd5rmU1dZYvV59" },
      { name: "Badminton", img: badminton, link: "https://forms.gle/GFfCMvAG1MuviEY49" },
    ],
  },
  {
    category: "e-box",
    image: esports,
    items: [
      { name: "Mobile Legends", img: ml, link:"https://forms.gle/qJCMXGbYugRsuLwF9" },
      { name: "Pubg", img: pubg, link:"https://forms.gle/fZpwGyuT5Pzey4c48" },
    ],
  },
  {
    category: "a-box",
    image: art,
    items: [
      { name: "Dance", img: dance,link:"https://forms.gle/gigYqvUKZqVM1LkS7" },
      { name: "Band", img: band, link:"https://forms.gle/7hwxaomnz7PUd5nv9" },
    ],
  },
  {
    category: "l-box",
    image: learning,
    items: [
      { name: "CoC", img: coc,link:"https://forms.gle/xAHHLUe7ASEtASWu8" },
      { name: "Debat", img: debat,link:"https://forms.gle/1Xf2bTU2YYcZckgW7" },
      { name: "Catur", img: catur,link:"https://forms.gle/UUv1BAy3sKKXXqSJA" },
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