import "./Reservations.css";
import { Reservation } from "./Reservation/Reservation";
import {
  cancelReservation,
  getMyReservations,
  getMyReservationsForHost,
  acptReservation,
  dnyReservation,
} from "../../services/ReservationService";
import { useEffect, useState } from "react";
import { getRole, getUerId } from "../../helpers/AuthHelper";
import { toast } from "react-toastify";

export const Reservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    if (getRole() == "GUEST") {
      getMyReservations(getUerId())
        .then((res) => {
          setReservations(res.data);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      getMyReservationsForHost()
        .then((res) => {
          setReservations(res.data);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  }, []);

  const cancelRes = (id) => {
    cancelReservation(id)
      .then(() => {
        let res = reservations.filter((r) => r.id == id)[0];
        res.reservationStatus = "CANCELED";
        setReservations([...reservations]);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const acceptRes = (id) => {
    acptReservation(id)
      .then((res) => {
        toast.success("Successfully accepted!");
      })
      .catch((err) => toast.error(err.message));
  };

  const denyRes = (id) => {
    dnyReservation(id)
      .then((res) => {
        toast.success("Successfully denied!");
      })
      .catch((err) => toast.error(err.message));
  };

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
      {reservations.length == 0 ? (
        <div className="container-fliud w-25 m-auto">
          <h1>No Reservations Yet!</h1>
        </div>
      ) : (
        reservations.map((reservation) => {
          return (
            <Reservation
              key={reservation.id}
              reservation={reservation}
              cancelRes={cancelRes}
              acceptRes={acceptRes}
              denyRes={denyRes}
            />
          );
        })
      )}
    </>
  );
};

export default Reservations;
