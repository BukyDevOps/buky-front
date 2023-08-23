import { useParams } from "react-router-dom";
import CustomMap from "./Map/CustomMap";
import { ImagesSection } from "./ImagesSection/ImagesSection";
import "./Accommodation.css";
import IssuerSection from "./IssuerSection/IssuerSection";
import { Ratings } from "../../Ratings/Ratings";
import { GET_ACCOMMODATION_BY_ID } from "../../../helpers/graphql";
import { useQuery } from "@apollo/client";
import Map from "../../Map/Map";

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
  const { loading, error, data } = useQuery(GET_ACCOMMODATION_BY_ID, {
    variables: { id: id },
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  const accommodation = data.accommodationById;

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
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <ImagesSection images={accommodation.images} />
          <section class="about-info-area section-gap">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6 info-left">
                  <Map
                    longitude={accommodation.location.lon}
                    latitude={accommodation.location.lat}
                    zoom={15}
                    markerContent={"f"}
                  />
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
                <Ratings id={accommodation.id} type="" />
              </div>
              <div className="container border-top mt-4">
                <IssuerSection
                  user={accommodation.user}
                  accommodationId={accommodation.id}
                />
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};
export default Accommodation;
