import { useRef } from "react";
import "./App.css";
import Profile from "./components/Profile";
import { createFileName, useScreenshot } from "use-react-screenshot";

function App() {
  const imgRef = useRef(null);
  const [image, takeScreenshot] = useScreenshot({
    type: "image/png",
    quality: 1.0,
  });
  const download = (image, { name = "webImg", extension = "png" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };
  const downloadScreenshot = () => {
    takeScreenshot(imgRef.current).then(download);
  };
  return (
    <div className="App" ref={imgRef}>
      <Profile />
      <button className="btn btn-success mt-2" onClick={downloadScreenshot}>
        Download
      </button>
    </div>
  );
}

export default App;
