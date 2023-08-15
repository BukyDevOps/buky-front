import { useState } from "react";
import "./RegistrationForm.css";
import { registration } from "../../../../services/AuthService";

const hostNotificationTypes = [
  "NEW_RESERVATION",
  "CANCELED_RESERVATION",
  "HOST_RATING",
  "ACCOMMODATION_RATING",
];

export const RegistrationForm = () => {
  const [registrationData, setRegistrationData] = useState({
    username: "",
    password: "",
    name: "",
    surname: "",
    address: "",
    role: "HOST",
    notificationTypes: [],
  });

  const handleChange = (e) => {
    if (e.target.type == "checkbox") {
      let nts = registrationData.notificationTypes;
      if (e.target.checked) nts.push(e.target.name);
      else {
        let index = nts.indexOf(e.target.name);
        if (index > -1) {
          nts.splice(index, 1);
        }
      }

      setRegistrationData({
        ...registrationData,
        notificationTypes: [...nts],
      });
    } else {
      setRegistrationData({
        ...registrationData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const submit = (e) => {
    e.preventDefault();
    registration(registrationData)
      .then((res) => {
        alert("sve ok");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

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
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control"
            name="surname"
            placeholder="Surname"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="form-control"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            required
          />
          <div className="single-element-widget">
            <label>Role</label>
            <div className="default-select" id="default-select">
              <select
                className="nice-select"
                name="role"
                onChange={handleChange}
              >
                <option value="HOST">Host</option>
                <option value="GUEST">Guest</option>
              </select>
            </div>
          </div>
          {registrationData.role == "HOST" &&
            hostNotificationTypes.map((nt) => {
              return (
                <div
                  key={nt}
                  className="switch-wrap d-flex justify-content-between"
                >
                  <p>{nt}</p>
                  <div className="primary-checkbox">
                    <input
                      name={nt}
                      type="checkbox"
                      id={nt}
                      onChange={handleChange}
                    />
                    <label for={nt}></label>
                  </div>
                </div>
              );
            })}
          {registrationData.role == "GUEST" && (
            <div className="switch-wrap d-flex justify-content-between">
              <p>REQUEST_PROCESSED</p>
              <div className="primary-checkbox">
                <input
                  name="REQUEST_PROCESSED"
                  type="checkbox"
                  id="default-checkbox"
                  onChange={handleChange}
                />
                <label for="default-checkbox"></label>
              </div>
            </div>
          )}
          <button className="primary-btn text-uppercase" onClick={submit}>
            Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
