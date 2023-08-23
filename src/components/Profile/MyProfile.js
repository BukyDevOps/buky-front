import ProfileInfo from "./ProfileInfo/ProfileInfo";
import "./MyProfile.css";
import { accommodations } from "../../helpers/entities";
import MyAccommodations from "../MyAccommodations/MyAccommodations";
import { getRole } from "../../helpers/AuthHelper";
import { useEffect, useState } from "react";
import { Reservations } from "../Reservations/Reservations";

export const MyProfile = () => {
  const [role, setRole] = useState("");
  useEffect(() => {
    setRole(getRole());
  }, []);
  return (
    <>
      <section class="about-banner relative">
        <div class="overlay overlay-bg"></div>
        <div class="container">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content col-lg-12">
              <h1 class="text-white">My profile</h1>
              <p class="text-white link-nav">
                <a href="index.html">Home </a>{" "}
                <span class="lnr lnr-arrow-right"></span>
                <a href="about.html"> My Profile</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <ProfileInfo />
      <Reservations />
      {role == "HOST" && (
        <>
          {/* <MyAccommodations accommodations={accommodations} /> */}
        </>
      )}
    </>
  );
};

export default MyProfile;
