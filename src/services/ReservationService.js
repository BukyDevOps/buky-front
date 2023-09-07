import axios from "axios";

// const RESERVATION_PATH = "http://localhost:8083/api/reservation";
const RESERVATION_PATH =
  "http://localhost:8090/reservation-service/api/reservation";

export const getMyReservations = (id) => {
  return axios.get(RESERVATION_PATH + "/user/" + id);
};

export const getMyReservationsForHost = () => {
  return axios.get(RESERVATION_PATH + "?onlyPending=true");
};

export const cancelReservation = (id) => {
  return axios.delete(RESERVATION_PATH + "/cancel/" + id);
};

export const acptReservation = (id) => {
  return axios.post(RESERVATION_PATH + "/accept/" + id);
};

export const dnyReservation = (id) => {
  return axios.post(RESERVATION_PATH + "/deny/" + id);
};

export const userHasPreviousReservations = (userId, accommodationId) => {
  return axios.get(
    RESERVATION_PATH +
      "/previous-reservations?userId=" +
      userId +
      "&accommodationId=" +
      accommodationId
  );
};

export const userStayedIn = (userId, accommodationId) => {
  return axios.get(
    RESERVATION_PATH +
      "/stayed-in?userId=" +
      userId +
      "&accommodationId=" +
      accommodationId
  );
};

export const createReservation = (reservation) => {
  return axios.post(RESERVATION_PATH, reservation);
};
