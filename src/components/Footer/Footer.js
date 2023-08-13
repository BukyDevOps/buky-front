import i1 from "../../static/img/i1.jpg";
import i2 from "../../static/img/i2.jpg";
import i3 from "../../static/img/i3.jpg";
import i4 from "../../static/img/i4.jpg";
import i5 from "../../static/img/i5.jpg";
import i6 from "../../static/img/i6.jpg";
import i7 from "../../static/img/i7.jpg";
import i8 from "../../static/img/i8.jpg";

export const Footer = () => {
  return (
    <footer className="footer-area section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-3  col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>About Agency</h6>
              <p>
                The world has become so fast paced that people don’t want to
                stand by reading a page of information, they would much rather
                look at a presentation and understand the message. It has come
                to a point
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>Navigation Links</h6>
              <div className="row">
                <div className="col">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Feature</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Portfolio</a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul>
                    <li>
                      <a href="#">Team</a>
                    </li>
                    <li>
                      <a href="#">Pricing</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>Newsletter</h6>
              <p>
                For business professionals caught between high OEM price and
                mediocre print and graphic output.
              </p>
              <div id="mc_embed_signup">
                <form
                  target="_blank"
                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                  method="get"
                  className="subscription relative"
                >
                  <div className="input-group d-flex flex-row">
                    <input
                      name="EMAIL"
                      placeholder="Email Address"
                      onFocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'Email Address '"
                      required=""
                      type="email"
                    />
                    <button className="btn bb-btn">
                      <span className="lnr lnr-location"></span>
                    </button>
                  </div>
                  <div className="mt-10 info"></div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-md-6 col-sm-6">
            <div className="single-footer-widget mail-chimp">
              <h6 className="mb-20">InstaFeed</h6>
              <ul className="instafeed d-flex flex-wrap">
                <li>
                  <img src={i1} alt="" />
                </li>
                <li>
                  <img src={i2} alt="" />
                </li>
                <li>
                  <img src={i3} alt="" />
                </li>
                <li>
                  <img src={i4} alt="" />
                </li>
                <li>
                  <img src={i5} alt="" />
                </li>
                <li>
                  <img src={i6} alt="" />
                </li>
                <li>
                  <img src={i7} alt="" />
                </li>
                <li>
                  <img src={i8} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row footer-bottom d-flex justify-content-between align-items-center">
          <p className="col-lg-8 col-sm-12 footer-text m-0">
            {" "}
            All rights reserved | This template is made with{" "}
            <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
          </p>
          <div className="col-lg-4 col-sm-12 footer-social">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-dribbble"></i>
            </a>
            <a href="#">
              <i className="fa fa-behance"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
