import axios from "axios";

const ACCOMMODATION_PATH = "http://localhost:8082/api/accommodation";

export const search = (search) => {
  return axios.get(
    ACCOMMODATION_PATH +
      "/search?" +
      "locationName=" +
      search.location.locationName +
      "&lon=" +
      search.location.longitude +
      "&lat=" +
      search.location.latitude +
      "&guestsNum=" +
      search.guestsNum +
      "&startDate=" +
      search.from +
      "&endDate=" +
      search.to
  );
};
