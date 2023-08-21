import Footer from "./components/Footer/Footer";
import MyRouter from "./router/MyRouter";
import "./helpers/interceptors/TokenInterceptor";
import "./static/css/linearicons.css";
import "./static/css/nice-select.css";
import { ToastContainer, toast } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import { getUerId } from "./helpers/AuthHelper";

function App() {
  let isLoaded = false;
  let stompClient = null;
  let cnt = 0;

  useEffect(() => {
    initializeWebSocketConnection();
  }, []);

  const initializeWebSocketConnection = () => {
    let ws = new SockJS(`http://localhost:8085/socket`);
    stompClient = Stomp.over(ws);
    connect();
  };

  const connect = () => {
    stompClient.connect({}, function () {
      isLoaded = true;
      setTimeout(() => openGlobalSocket(), 500);
    });
  };

  const openGlobalSocket = () => {
    if (isLoaded && getUerId() != "") {
      stompClient.subscribe("/socket-publisher/" + getUerId(), (alarm) => {
        if (cnt % 2 === 0) {
          toast(alarm.body);
        }
        cnt++;
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <MyRouter />
      <Footer />
    </>
  );
}

export default App;
