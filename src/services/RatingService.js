import axios from "axios";

// const RATING_PATH = "http://localhost:8084/api/rating";
const RATING_PATH = "http://localhost:8090/rating-service/api/rating";

export const getRatingByHostId = (hostId) => {
  return axios.get(RATING_PATH + "/host?hostId=" + hostId);
};

export const getRatingByAccommodationId = (accommodationId) => {
  return axios.get(
    RATING_PATH + "/accommodation?accommodationId=" + accommodationId
  );
};

export const addRating = (rating) => {
  return axios.post(RATING_PATH, rating);
};

export const updateRating = (rating) => {
  return axios.put(RATING_PATH + "/" + rating.id, rating);
};
