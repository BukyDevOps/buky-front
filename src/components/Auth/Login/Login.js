import LoginForm from "./LoginForm/LoginForm";

export const Login = () => {
  return (
    <section className="banner-area relative">
      <div className="overlay overlay-bg"></div>
      <div className="container">
        <div className="row fullscreen align-items-center justify-content-between">
          <div className="col-lg-6 col-md-6 banner-left">
            <h6 className="text-white">Away from monotonous life</h6>
            <h1 className="text-white">Magical Travel</h1>
            <p className="text-white">
              Sign in or sign up to activate different functionalities like
              checking accommodations, publishing accommodations and so on.{" "}
              <br />
              <br />
              Not registered yet?
            </p>
            <a href="/register" className="primary-btn text-uppercase">
              Registration
            </a>
          </div>
          <div className="col-lg-4 col-md-6 banner-right">
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
