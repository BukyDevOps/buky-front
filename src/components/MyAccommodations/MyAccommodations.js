import { useEffect, useState } from "react";
import "./MyAccommodations.css";
import axios from "axios";

export const MyAccommodations = () => {

  const [accommodations, setAccommodations] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8082/api/accommodation/get-all-host").then(res => {
      if (res.data) {
        console.log(res.data)
        setAccommodations(res.data)
      }
    })
  }, [])

  return (

    <>
      <section class="about-banner relative">
        <div class="overlay overlay-bg"></div>
        <div class="container">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content col-lg-12">
              <h1 class="text-white">Accommodations</h1>
              <p class="text-white link-nav">
                <a href="index.html">Home </a>{" "}
                <span class="lnr lnr-arrow-right"></span>
                <a href="about.html"> My Accommodations</a>
              </p>
            </div>
          </div>
        </div>
      </section>
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
              {accommodations && accommodations.map((r) => (
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
              )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccommodations;
