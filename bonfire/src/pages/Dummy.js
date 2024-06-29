import React from "react";
import '../App.css';
import "../fonts/fonts.css";
import BucketListModal from "../components/BucketListModal";
import CreateBonfireModal from "../components/CreateBonfireModal";
import UploadImagesModal from "../components/UploadImagesModal"

function LoginSignUp() {

  return (
      <div>
        <BucketListModal />
        <CreateBonfireModal />
        <UploadImagesModal />
      </div>

  );
}

export default LoginSignUp