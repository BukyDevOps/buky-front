import { AccommodationModifyForm } from "./AccommodationModifyForm/AccommodationModifyForm";

export const AccommodationModify = ({ accommodation }) => {
  return (
    <>
      <section class="about-banner relative">
        <div class="overlay overlay-bg"></div>
        <div class="container">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content col-lg-12">
              <h1 class="text-white">Accommodations modify</h1>
              <p class="text-white link-nav">
                <a href="/home">Home </a>{" "}
                <span class="lnr lnr-arrow-right"></span>
                <a href="/accommodations"> Accommodation modify</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="destinations-area section-gap">
        <div class="container">
          <AccommodationModifyForm accommodation={accommodation} />
        </div>
      </section>
    </>
  );
};

export default AccommodationModify;
