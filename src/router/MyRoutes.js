import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../components/Home/Home";
import Accommodations from "../components/Accommodations/Accommodations";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import Reservations from "../components/Reservations/Reservations";
import MyProfile from "../components/Profile/MyProfile";
import MyAccommodations from "../components/MyAccommodations/MyAccommodations";
import Accommodation from "../components/Accommodations/Accommodation/Accommodation";
import AccommodationModify from "../components/Accommodations/AccommodationModify/AccommodationModify";
import Notifications from "../components/Notifications/Notifications";
import SearchResults from "../components/SearchResults/SearchResults";

const MyRoutes = () => {
  return (
    <Routes>
      <Route exact path="" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/accommodations" element={<Accommodations />} />
      <Route exact path="/results" element={<SearchResults />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/my-accommodations" element={<MyAccommodations />} />
      <Route exact path="/my-reservations" element={<Reservations />} />
      <Route exact path="/my-notifications" element={<Notifications />} />
      <Route exact path="/my-profile" element={<MyProfile />} />
      <Route
        exact
        path="/accommodations/create"
        element={<AccommodationModify accommodation={null} />}
      />
      <Route
        exact
        path="/accommodations/update/:id"
        element={<AccommodationModify accommodation={null} />}
      />
      <Route exact path="/accommodations/:id" element={<Accommodation />} />
    </Routes>
  );
};

export default MyRoutes;
