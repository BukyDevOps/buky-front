import "./Reservations.css";
import { ReservationsList } from "./ReservationsList/ReservationsList";

import { reservations } from "../../helpers/entities";

export const Reservations = () => {
  return (
    <>
      <section class="about-banner relative">
        <div class="overlay overlay-bg"></div>
        <div class="container">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content col-lg-12">
              <h1 class="text-white">My reservations</h1>
              <p class="text-white link-nav">
                <a href="index.html">Home </a>{" "}
                <span class="lnr lnr-arrow-right"></span>{" "}
                <a href="/my-reservations"> My reservations</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <ReservationsList reservations={reservations} />
    </>
  );
};

export default Reservations;
