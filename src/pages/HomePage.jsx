import React from "react";
import HomeComponent from "../Components/HomeComponent";
import UserProfile from "../Components/UserProfile";

const HomePage = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <UserProfile />
      <HomeComponent />
    </div>
  );
};

export default HomePage;
