export const RegistrationForm = () => {
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
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
          />
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
          />
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
          />
          <input
            type="text"
            className="form-control"
            name="surname"
            placeholder="Surname"
          />
          <input
            type="text"
            className="form-control"
            name="address"
            placeholder="Address"
          />
          <input
            type="text"
            className="form-control"
            name="role"
            placeholder="Role"
          />
          <button className="primary-btn text-uppercase">Registration</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
