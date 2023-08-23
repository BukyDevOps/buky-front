import { useEffect } from "react";
import { useState } from "react";
import {
  userHasPreviousReservations,
  userStayedIn,
} from "../../../services/ReservationService";
import { getUerId } from "../../../helpers/AuthHelper";
import {
  addRating,
  updateRating,
  getRatingByAccommodationId,
  getRatingByHostId,
} from "../../../services/RatingService";
import { toast } from "react-toastify";

export const RatingForm = ({ type, subjectId }) => {
  const [visible, setVisible] = useState(true);
  const [update, setUpdate] = useState(false);
  const [rating, setRating] = useState({
    id: null,
    guestId: 0,
    hostRating: 0,
    subjectId: 0,
    ratingValue: 0,
    createdAt: 0,
    description: "",
    active: 0,
  });

  useEffect(() => {
    if (type == "ACCOMMODATION-RATING") {
      userStayedIn(getUerId(), subjectId).then((res) => {
        setVisible(res.data);
        if (res.data) {
          getRatingByAccommodationId(subjectId).then((res) => {
            if (res.data) {
              setRating(res.data);
              setUpdate(true);
            }
          });
        }
      });
    } else {
      userHasPreviousReservations(getUerId(), subjectId).then((res) => {
        setVisible(res.data);
        if (res.data) {
          getRatingByHostId(subjectId).then((res) => {
            if (res.data) {
              setRating(res.data);
              setUpdate(true);
            }
          });
        }
      });
    }
  }, []);

  const handleChange = (e) => {
    setRating({
      ...rating,
      [e.target.name]: e.target.value,
    });
  };

  const modifyRating = () => {
    if (!update) {
      rating.active = true;
      rating.createdAt = new Date();
      rating.subjectId = subjectId;
      rating.hostRating = type != "ACCOMMODATION-RATING";
      addRating(rating).then((res) => {
        setRating(res.data);
        toast.success("Successfully updated!");
      });
    } else {
      updateRating(rating).then((res) => {
        setRating(res.data);
        toast.success("Successfully updated!");
      });
    }
  };

  return visible ? (
    <div className="row d-flex align-items-center mt-2">
      <h5 className="mr-2">
        {type == "ACCOMMODATION-RATING"
          ? "Accommodation rating"
          : "Host rating"}
      </h5>
      <select
        className="nice-select"
        name="ratingValue"
        onChange={handleChange}
        value={rating.ratingValue}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <textarea
        type="textarea"
        className="form-control"
        name="description"
        placeholder="Comment"
        onChange={handleChange}
        defaultValue={rating.description}
      />
      <button className="primary-btn" onClick={modifyRating}>
        Add rating
      </button>
    </div>
  ) : (
    <></>
  );
};

export default RatingForm;
