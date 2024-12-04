import "./card.css";
const cardData = [
  {
    id: 1,
    title: "Dodge Charger",
    text: "A powerful muscle car known for its bold styling and high-performance capabilities.",
    image:
      "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/charger/gallery/desktop/MY23Charger_Gallery_3.jpg.image.1000.jpg",
  },
  {
    id: 2,
    title: "Dodge Challenger",
    text: "A robust pickup truck designed for durability and heavy-duty performance.",
    image: "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/challenger/vlp/desktop/MY23Challenger_VLP_Desktop_gallery1.jpg",
  },
  {
    id: 3,
    title: "Dodge Durango",
    text: "A versatile SUV that blends luxury, power, and capability.",
    image: "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2024/durango/vlp/mobile/my24-dodge-durango-vlp-safetyandsecurity-blurbrail-2-mobile.jpg.image.500.jpg",
  },{
    id: 4,
    title: "Dodge Charger",
    text: "The Charger nameplate has appeared on mid-size cars, luxury coupes, hatchbacks, and sedans.",
    image: "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/charger/gallery/desktop/MY23Charger_Gallery_1.jpg.image.1440.jpg",
  },

];

export default function Cards() {
  return (
    <>
      <h1>Services</h1>
      <div className="card-con">
        {cardData.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} className="card-img-top" alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
