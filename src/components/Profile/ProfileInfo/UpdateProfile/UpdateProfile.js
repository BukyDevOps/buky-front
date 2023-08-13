export const UpdateProfile = ({ profile }) => {
  return (
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active">
        <form className="form-wrap">
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Username"
            value={profile.username}
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={profile.password}
          />
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            value={profile.email}
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
          <button className="primary-btn text-uppercase">Update</button>
        </form>
      </div>
    </div>
  );
};
