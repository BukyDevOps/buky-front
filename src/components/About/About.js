import ImageUploader from "../ImageUploader/ImageUploader";
import Map from "../Map/Map";
import PatternInput from "../Shared/PatternInput";
import RangeInput from "../Shared/RangeInput";

export const About = () => {
  return (
    <>
      <section class="about-banner relative">
        <div class="overlay overlay-bg"></div>
        <div class="container">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content col-lg-12">
              <h1 class="text-white">About Us</h1>
              <p class="text-white link-nav">
                <a href="index.html">Home </a>{" "}
                <span class="lnr lnr-arrow-right"></span>{" "}
                <a href="about.html"> About Us</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="about-info-area section-gap">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 info-left">
              <img class="img-fluid" src="img/about/info-img.jpg" alt="" />
            </div>
            <Map
              latitude={46.11439485}
              longitude={19.6732199}
              zoom={15}
              markerContent="Lokacija!!!!!!!!!!11"
            />
            <div class="col-lg-6 info-right">
              <ImageUploader></ImageUploader>
              <>&nbsp;</>
              <>&nbsp;</>
              <PatternInput displayPrice={true}></PatternInput>
              <>&nbsp;</>
              <>&nbsp;</>
              <RangeInput displayPrice={true}></RangeInput>
              <h6>About Us</h6>
              <h1>Who We Are?</h1>
              <p>
                Here, I focus on a range of items and features that we use in
                life without giving them a second thought. such as Coca Cola.
                Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="price-area section-gap">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="menu-content pb-70 col-lg-8">
              <div class="title text-center">
                <h1 class="mb-10">We Provide Affordable Prices</h1>
                <p>
                  Well educated, intellectual people, especially scientists at
                  all times demonstrate considerably.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="single-price">
                <h4>Cheap Packages</h4>
                <ul class="price-list">
                  <li class="d-flex justify-content-between align-items-center">
                    <span>New York</span>
                    <a href="#" class="price-btn">
                      $1500
                    </a>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Maldives</span>
                    <a href="#" class="price-btn">
                      $1500
                    </a>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Sri Lanka</span>
                    <a href="#" class="price-btn">
                      $1500
                    </a>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Nepal</span>
                    <a href="#" class="price-btn">
                      $1500
                    </a>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Thiland</span>
                    <a href="#" class="price-btn">
                      $1500
                    </a>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Singapore</span>
                    <a href="#" class="price-btn">
                      $1500
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="single-price">
                <h4>Luxury Packages</h4>
                <ul class="price-list">
                  <li class="d-flex justify-content-between align-items-center">
                    <span>New York</span>
                    <a href="#" class="price-btn">
                      $1500
                    </a>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Maldives</span>
                    <a href="#" class="price-btn">
                      $1500
                    </a>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Sri Lanka</span>
                    <a href="#" class="price-btn">
                      $1500
                    </a>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Nepal</span>
                    <a href="#" class="price-btn">
                      $1500
                    </a>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Thiland</span>
                    <a href="#" class="price-btn">
                      $1500
                    </a>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Singapore</span>
                    <a href="#" class="price-btn">
                      $1500
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="single-price">
                <h4>Camping Packages</h4>
                <ul class="price-list">
                  <li class="d-flex justify-content-between align-items-center">
                    <span>New York</span>
                    <a href="#" class="price-btn">
                      $1500
                    </a>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Maldives</span>
                    <a href="#" class="price-btn">
                      $1500
                    </a>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Sri Lanka</span>
                    <a href="#" class="price-btn">
                      $1500
                    </a>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Nepal</span>
                    <a href="#" class="price-btn">
                      $1500
                    </a>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Thiland</span>
                    <a href="#" class="price-btn">
                      $1500
                    </a>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Singapore</span>
                    <a href="#" class="price-btn">
                      $1500
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="other-issue-area section-gap">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="menu-content pb-70 col-lg-9">
              <div class="title text-center">
                <h1 class="mb-10">Other issues we can help you with</h1>
                <p>
                  We all live in an age that belongs to the young at heart. Life
                  that is.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="single-other-issue">
                <div class="thumb">
                  <img class="img-fluid" src="img/o1.jpg" alt="" />
                </div>
                <a href="#">
                  <h4>Rent a Car</h4>
                </a>
                <p>
                  The preservation of human life is the ultimate value, a pillar
                  of ethics and the foundation.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="single-other-issue">
                <div class="thumb">
                  <img class="img-fluid" src="img/o2.jpg" alt="" />
                </div>
                <a href="#">
                  <h4>Cruise Booking</h4>
                </a>
                <p>
                  I was always somebody who felt quite sorry for myself, what I
                  had not got compared.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="single-other-issue">
                <div class="thumb">
                  <img class="img-fluid" src="img/o3.jpg" alt="" />
                </div>
                <a href="#">
                  <h4>To Do List</h4>
                </a>
                <p>
                  The following article covers a topic that has recently moved
                  to center stage–at least it seems.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="single-other-issue">
                <div class="thumb">
                  <img class="img-fluid" src="img/o4.jpg" alt="" />
                </div>
                <a href="#">
                  <h4>Food Features</h4>
                </a>
                <p>
                  There are many kinds of narratives and organizing principles.
                  Science is driven by evidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
