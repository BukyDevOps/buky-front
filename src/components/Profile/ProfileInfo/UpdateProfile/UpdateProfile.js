import { useEffect, useState } from "react";
import { getUerId, logout } from "../../../../helpers/AuthHelper";
import {
  deleteMyProfile,
  getUserById,
  updateUser,
} from "../../../../services/UserService";
import { toast } from "react-toastify";

const hostNotificationTypes = [
  "NEW_RESERVATION",
  "CANCELED_RESERVATION",
  "HOST_RATING",
  "ACCOMMODATION_RATING",
];

export const UpdateProfile = () => {
  const [updatedProfile, setUpdatedProfile] = useState({
    id: null,
    username: "",
    password: "",
    email: "",
    name: "",
    surname: "",
    address: "",
    role: "",
    notificationTypes: [],
    ratingCount: 0,
    rating: 0.0,
    active: true,
  });

  useEffect(() => {
    getUserById(getUerId()).then((res) => {
      setUpdatedProfile(res.data);
    });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    updateUser(updatedProfile)
      .then((res) => {
        toast.success("profile updated");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const deleteUser = (e) => {
    e.preventDefault();

    deleteMyProfile()
      .then((res) => {
        logout();
        window.location.href = "/home";
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleChange = (e) => {
    if (e.target.type == "checkbox") {
      let nts = updatedProfile.notificationTypes;
      if (e.target.checked) nts.push(e.target.name);
      else {
        let index = nts.indexOf(e.target.name);
        if (index > -1) {
          nts.splice(index, 1);
        }
      }

      setUpdatedProfile({
        ...updatedProfile,
        notificationTypes: [...nts],
      });
    } else {
      setUpdatedProfile({
        ...updatedProfile,
        [e.target.name]: e.target.value,
      });
    }
  };

  const checkTypeExisting = (notificationType) => {
    let index = updatedProfile.notificationTypes.indexOf(notificationType);
    return index <= -1;
  };

  return (
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active">
        <form className="form-wrap">
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
            defaultValue={updatedProfile.username}
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            defaultValue={updatedProfile.password}
          />
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            defaultValue={updatedProfile.email}
          />
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            defaultValue={updatedProfile.name}
          />
          <input
            type="text"
            className="form-control"
            name="surname"
            placeholder="Surname"
            onChange={handleChange}
            required
            defaultValue={updatedProfile.surname}
          />
          <input
            type="text"
            className="form-control"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            required
            defaultValue={updatedProfile.address}
          />
          {updatedProfile.role == "HOST" &&
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
                      defaultChecked={checkTypeExisting(nt)}
                    />
                    <label htmlFor={nt}></label>
                  </div>
                </div>
              );
            })}
          {updatedProfile.role == "GUEST" && (
            <div className="switch-wrap d-flex justify-content-between">
              <p>PROCESSED_REQUEST</p>
              <div className="primary-checkbox">
                <input
                  name="PROCESSED_REQUEST"
                  type="checkbox"
                  id="default-checkbox"
                  onChange={handleChange}
                  defaultChecked={checkTypeExisting("PROCESSED_REQUEST")}
                />
                <label for="default-checkbox"></label>
              </div>
            </div>
          )}
          <button className="primary-btn text-uppercase" onClick={submit}>
            Update
          </button>
          <button className="primary-btn text-uppercase" onClick={deleteUser}>
            Delete
          </button>
        </form>
      </div>
    </div>
  );
};
