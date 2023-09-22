import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
const WebcamComponent = () => <Webcam />;
const videoconstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};

function Profile() {
  const [picture, setPicture] = useState("");
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  });
  return (
    <div className="profile">
      <h2 className="mb-5 text-center">
        React Photo capture using Webcam example
      </h2>
      <div className="window">
        {picture == "" ? (
          <Webcam
            audio={false}
            height={200}
            ref={webcamRef}
            width={200}
            screenshotFormat="image/jpeg"
            videoConstraints={videoconstraints}
          />
        ) : (
          <img src={picture} alt="profileImage" />
        )}
      </div>
      <div className="btns mt-2">
        {picture != "" ? (
          <button
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              setPicture("");
            }}
          >
            Retake
          </button>
        ) : (
          <button
            className="btn btn-danger"
            onClick={(e) => {
              e.preventDefault();
              capture();
            }}
          >
            Capture
          </button>
        )}
      </div>
    </div>
  );
}

export default Profile;
