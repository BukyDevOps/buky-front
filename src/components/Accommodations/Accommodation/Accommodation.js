import { useParams } from "react-router-dom";
import CustomMap from "./Map/CustomMap";
import { ImagesSection } from "./ImagesSection/ImagesSection";
import "./Accommodation.css";
import IssuerSection from "./IssuerSection/IssuerSection";
import { Ratings } from "../../Ratings/Ratings";

const accommodation = {
  id: 1,
  user: {
    id: 1,
    username: "blagoje",
    name: "Njegos",
    surname: "Blagojevic",
    rating: 4,
  },
  name: "Vikendica Helena",
  description:
    "Prelepa vikendica na obroncima Fruske gore, neki opis da je veci. Posetite nas svaki dan i uzivajte...",
  minGuestsNum: 1,
  maxGuestsNum: 10,
  autoApproveReservation: false,
  tags: ["AC", "TV", "WiFi", "Parking", "2 Toilets"],
  images: [
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/137008976.jpg?k=6a65a39ca1a6195c1c8cda5936ef8aa6b9b70f6769e327664072ee175e8abc0d&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/152471035.jpg?k=c97fc38138b7b569a0e51282210aa78f9a92144dc51bb1da778d47049a4690f5&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/156679327.jpg?k=6e8ec7cd0cc630dd684f920f42202ea8994dd2400e43aaaf9a54d26f0bcc7cb5&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/156679337.jpg?k=adfb8c786f954a848d1a7dab56ba77bd7684456bf7ec32f2935a5e489c856520&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/156679352.jpg?k=52352a34872bf4339ed6c1d89670f8bdb0eaa02aaade3ed7f34b6e79b34960fa&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/152471014.jpg?k=e9ad7e6cdab2cbd7c3dc2c24a94d327a6b966b4ebadce02ab965fabd11c5b0eb&o=&hp=1",
  ],
  location: {
    id: 1,
    name: "Jahorina",
    fullAddress: "Trg heroja 23, Jahorina",
    lon: "43.72554",
    lat: "18.5603701",
  },
  availabilaty: null,
};

const ratings = [
  {
    id: 1,
    guest: {
      id: 1,
      username: "guest1",
    },
    ratingValue: 3,
    createdAt: new Date(),
    description: "Lijepa je vikendica.",
  },
  {
    id: 1,
    guest: {
      id: 1,
      username: "guest1",
    },
    ratingValue: 3,
    createdAt: new Date(),
    description: "Lijepa je vikendica.",
  },
  {
    id: 1,
    guest: {
      id: 1,
      username: "guest1",
    },
    ratingValue: 3,
    createdAt: new Date(),
    description: "Lijepa je vikendica.",
  },
  {
    id: 1,
    guest: {
      id: 1,
      username: "guest1",
    },
    ratingValue: 3,
    createdAt: new Date(),
    description: "Lijepa je vikendica.",
  },
  {
    id: 1,
    guest: {
      id: 1,
      username: "guest1",
    },
    ratingValue: 3,
    createdAt: new Date(),
    description: "Lijepa je vikendica.",
  },
  {
    id: 1,
    guest: {
      id: 1,
      username: "guest1",
    },
    ratingValue: 3,
    createdAt: new Date(),
    description: "Lijepa je vikendica.",
  },
];

export const Accommodation = () => {
  const { id } = useParams();
  return (
    <div className="gray-bg">
      <section class="about-banner relative">
        <div class="overlay overlay-bg"></div>
        <div class="container">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content col-lg-12">
              <h1 class="text-white">Accommodation view</h1>
              <p class="text-white link-nav">
                <a href="/home">Home </a>{" "}
                <span class="lnr lnr-arrow-right"></span>
                <a href="/accommodations"> Accommodation {id} view</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <ImagesSection images={accommodation.images} />
      <section class="about-info-area section-gap">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 info-left">
              {/* <CustomMap location={accommodation.location} /> */}
            </div>
            <div class="col-lg-6 info-right">
              <h6>Accommodation</h6>
              <h1>{accommodation.name}</h1>
              <p>{accommodation.description}</p>
            </div>
          </div>
          <div className="container mt-4">
            <div class="tags row align-items-between">
              {accommodation.tags.map((tag) => {
                return (
                  <div key={tag} className="destinations-area">
                    <div className="tag single-destinations">{tag}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="container border-top mt-4 pt-3">
            <Ratings ratings={ratings} />
          </div>
          <div className="container border-top mt-4">
            <IssuerSection user={accommodation.user} />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Accommodation;
