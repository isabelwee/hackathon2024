import React from "react";
import '../App.css';
import "../fonts/fonts.css";
import BucketListModal from "../components/BucketListModal";
import CreateBonfireModal from "../components/CreateBonfireModal";

function LoginSignUp() {

  return (
      <div>
        <BucketListModal />
        <CreateBonfireModal />
      </div>

  );
}

export default LoginSignUp