import { useEffect, useState } from "react";
import "./IssuerSection.css";
import { Ratings } from "../../../Ratings/Ratings";
import { getUerId } from "../../../../helpers/AuthHelper";

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

export const IssuerSection = ({ user }) => {
  const [stars, setStars] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    let checked = [];
    for (let index = 0; index < user.rating; index++) {
      checked.push(<span class="fa fa-star checked"></span>);
    }
    setStars([...checked]);
    setUserId(getUerId());
  }, []);
  return (
    <div className="row mt-3">
      <div className="d-flex justify-content-center col-lg-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          height={100}
          width={100}
        />
      </div>
      <div className="col-lg-3">
        <h3>{user.username}</h3>
        <p>
          {user.name} {user.surname}
        </p>
        <h4 class="d-flex justify-content-between">
          <div class="star">
            {stars}
            <span class="fa fa-star"></span>
          </div>
        </h4>
        {userId == user.id && (
          <div className="row mt-2">
            <button className="primary-btn text-uppercase">Delete</button>
            <button className="primary-btn text-uppercase">Update</button>
          </div>
        )}
      </div>
      <div className="col-lg-7">
        <Ratings ratings={ratings} />
      </div>
    </div>
  );
};

export default IssuerSection;
