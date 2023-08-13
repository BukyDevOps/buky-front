import "./MyAccommodations.css";

export const MyAccommodations = ({ accommodations }) => {
  return (
    <div className="container">
      <div class="section-top-border">
        <a href="/accommodations/create" className="primary-btn text-uppercase">
          Create accommodation
        </a>
        <div class="progress-table-wrap">
          <div class="progress-table">
            <div class="table-head">
              <div class="user">User</div>
              <div class="name">Name</div>
              <div class="description">Description</div>
              <div class="location">Location</div>
              <div class="btn1"></div>
              <div class="btn2"></div>
              <div class="btn3"></div>
            </div>
            {accommodations.map((r) => {
              return (
                <div class="table-row" key={r.id}>
                  <div class="user">{r.userId}</div>
                  <div class="name">{r.name}</div>
                  <div class="description">{r.description}</div>
                  <div class="location">Lokacija</div>
                  <div class="btn1">
                    <a
                      href={"/accommodation/" + r.id}
                      class="genric-btn primary"
                    >
                      View
                    </a>
                  </div>
                  <div class="btn1">
                    <button class="genric-btn primary">Update</button>
                  </div>
                  <div class="btn1">
                    <button class="genric-btn primary">Delete</button>
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

export default MyAccommodations;
