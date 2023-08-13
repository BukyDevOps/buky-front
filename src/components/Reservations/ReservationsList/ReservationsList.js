export const ReservationsList = ({ reservations }) => {
  return (
    <div className="container">
      <div class="section-top-border">
        <div class="progress-table-wrap">
          <div class="progress-table">
            <div class="table-head">
              <div class="user">User</div>
              <div class="accommodation">Accommodation</div>
              <div class="guests-num">Guests num</div>
              <div class="price">Price/Price by guest</div>
              <div class="start">Start</div>
              <div class="end">End</div>
              <div class="status">Status</div>
              <div class="btn1"></div>
              <div class="btn1"></div>
            </div>
            {reservations.map((r) => {
              return (
                <div class="table-row" key={r.id}>
                  <div class="user">{r.userId}</div>
                  <div class="accommodation">{r.accommodationId}</div>
                  <div class="guests-num">{r.guestsNum}</div>
                  <div class="price">
                    {r.totalPrice} € / {r.priceByGuest} €
                  </div>
                  <div class="start">{r.reservationStart}</div>
                  <div class="end">{r.reservationEnd}</div>
                  <div class="status">{r.reservationStatus}</div>
                  <div class="btn1">
                    <button class="genric-btn primary">Cancel</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
