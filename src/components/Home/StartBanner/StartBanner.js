import Search from "../SearchTab/Search";

export const StartBanner = () => {
  return (
    <section className="banner-area relative">
      <div className="overlay overlay-bg"></div>
      <div className="container">
        <div className="row fullscreen align-items-center justify-content-between">
          <div className="col-lg-6 col-md-6 banner-left">
            <h6 className="text-white">Away from monotonous life</h6>
            <h1 className="text-white">Buky</h1>
            <p className="text-white">
            "Your Journey, Our Expertise: Welcome to Buky, Where Booking Meets Brilliance!"
            </p>
          </div>
          <div className="col-lg-4 col-md-6 banner-right">
            <Search />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartBanner;
