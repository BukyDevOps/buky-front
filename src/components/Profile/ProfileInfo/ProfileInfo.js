import { profile } from "../../../helpers/entities";
import { UpdateProfile } from "./UpdateProfile/UpdateProfile";

export const ProfileInfo = () => {
  return (
    <section class="about-info-area section-gap">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 info-left">
            <img class="img-fluid" src="img/about/info-img.jpg" alt="" />
          </div>
          <div class="col-lg-6 info-right">
            <UpdateProfile profile={profile} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileInfo;
