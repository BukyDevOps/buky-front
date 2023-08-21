import axios from "axios";

const NOTIFICATION_PATH = "http://localhost:8085/api/notification";

export const getMyNotifications = () => {
  return axios.get(NOTIFICATION_PATH);
};
