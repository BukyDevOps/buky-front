import Stomp from "stompjs";
import SockJS from "sockjs-client";
import { getUerId } from "../helpers/AuthHelper";

let isLoaded = false;
let stompClient = null;

export const initializeWebSocketConnection = () => {
  let ws = new SockJS(`http://localhost:8085/socket`);
  stompClient = Stomp.over(ws);
  connect();
};

export const connect = () => {
  stompClient.connect({}, function () {
    isLoaded = true;
    openGlobalSocket();
  });
};

export const disconnect = () => {
  stompClient.disconnect();
  isLoaded = false;
};

export const openGlobalSocket = () => {
  if (isLoaded) {
    stompClient.subscribe("/socket-publisher/" + getUerId(), (alarm) => {
      console.log(alarm);
    });
  }
};
