import React from "react";
import { Link } from "react-router-dom";
import Notfound from "../assets/images/movies/notfound.jpg";

function NotFound() {
  return (
    <div className="flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6">
      <img
        className="w-full h-96 object-contain"
        src={Notfound}
        alt="notfound"
      />
      <Link
        to="/"
        className="bg-subMain text-white font-medium py-2 px-4 rounded-md"
      >
        GO BACK HOME
      </Link>
    </div>
  );
}

export default NotFound;
