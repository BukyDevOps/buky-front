import axios from "axios";

const RATING_PATH = "http://localhost:8084/api/rating";

export const getRatingByHostId = (hostId) => {
  return axios.get(RATING_PATH + "?hostId=" + hostId);
};

export const getRatingByAccommodationId = (accommodationId) => {
  return axios.get(RATING_PATH + "?accommodationId=" + accommodationId);
};

export const addRating = (rating) => {
  return axios.post(RATING_PATH, rating);
};

export const updateRating = (rating) => {
  return axios.put(RATING_PATH + "/" + rating.id, rating);
};
