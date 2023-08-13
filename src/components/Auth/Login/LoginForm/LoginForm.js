export const LoginForm = () => {
  return (
    <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade show active"
        id="flight"
        role="tabpanel"
        aria-labelledby="flight-tab"
      >
        <form className="form-wrap">
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Username"
          />
          <input
            type="text"
            className="form-control"
            name="password"
            placeholder="Password"
          />
          <button className="primary-btn text-uppercase">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
