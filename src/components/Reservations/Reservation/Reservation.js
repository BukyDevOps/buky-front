import { useEffect, useState } from "react";
import { reservations } from "../../../helpers/entities";
import { cancelReservation } from "../../../services/ReservationService";
import { getRole, getUerId } from "../../../helpers/AuthHelper";
import RatingForm from "../../Shared/RatingForm/RatingForm";

export const Reservation = ({ reservation, cancelRes, acceptRes, denyRes }) => {
  const checkCanceling = (reservation) => {
    if (
      reservation.reservationStatus != "PENDING" &&
      reservation.reservationStatus != "ACCEPTED"
    )
      return false;
    let difference =
      new Date().getTime() - new Date(reservation.reservationStart).getTime();
    console.log(Math.ceil(difference / (1000 * 3600 * 24)));
    return Math.ceil(difference / (1000 * 3600 * 24)) < 1;
  };

  return (
    <div className="container">
      <div class="section-top-border reservation">
        <div class="progress-table-wrap">
          <div class="row">
            <div className="col-lg-3">
              <label>User id:</label>
              <h6>{reservation.userId}</h6>
              <label className="mt-3">Accommodation id:</label>
              <h6>{reservation.accommodationId}</h6>
              <label className="mt-3">Guests number:</label>
              <h6>{reservation.guestsNum}</h6>
            </div>
            <div className="col-lg-2">
              <label>From:</label>
              <h6>{reservation.reservationStart}</h6>
              <label className="mt-3">To:</label>
              <h6>{reservation.reservationEnd}</h6>
              <label className="mt-3">Status:</label>
              <h6>{reservation.reservationStatus}</h6>
            </div>
            <div className="col-lg-2">
              <label>Total price:</label>
              <h6>{reservation.totalPrice} €</h6>
              <label className="mt-3">Price by guest:</label>
              <h6>{reservation.priceByGuest} €</h6>
              {getRole() == "GUEST" && checkCanceling(reservation) && (
                <button
                  className="primary-btn mt-3"
                  onClick={() => cancelRes(reservation.id)}
                >
                  Cancel
                </button>
              )}
              {getRole() == "HOST" &&
                reservation.reservationStatus == "PENDING" && (
                  <>
                    <button
                      className="primary-btn mt-3"
                      onClick={() => acceptRes(reservation.id)}
                    >
                      Accept
                    </button>
                    <button
                      className="primary-btn mt-1"
                      onClick={() => denyRes(reservation.id)}
                    >
                      Deny
                    </button>
                  </>
                )}
            </div>
            <div className="col-lg-4">
              <RatingForm
                subjectId={reservation.accommodationId}
                type={"ACCOMMODATION-RATING"}
              />
              <RatingForm
                subjectId={reservation.accommodationId}
                type={"HOST-RATING"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
