import { useEffect, useRef, useState } from "react";

function App() {
  const [hasPhoto, setHasPhoto] = useState(false);
  const videoRef = useRef(null);
  const photoRef = useRef(null);

  /**
   * Attempt to get a video stream from the user's camera.
   *
   * The `getUserMedia` API is a Promise-based API that returns a MediaStream
   * object. The `video` property of the constraint object is set to `true` to
   * indicate that we want a video stream, and the `audio` property is set to
   * `false` to indicate that we don't want an audio stream.
   *
   * If the user grants access to the camera, the `then` clause of the Promise
   * is executed, and the `srcObject` property of the video element is set to
   * the MediaStream object. This causes the video element to display the
   * stream from the camera.
   *
   * If the user denies access to the camera, the `catch` clause of the Promise
   * is executed, and an error message is logged to the console.
   */
  const getVideo = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        // Request access to the user's camera
        const stream = await navigator.mediaDevices.getUserMedia({
          // We only want a video stream
          video: { width: 1920, height: 1080 },
          // We don't want an audio stream
          audio: false,
        });

        // Set the srcObject property of the video element to the
        // MediaStream object, which will display the stream from the
        // camera.
        videoRef.current.srcObject = stream;

        // Play the video stream
        videoRef.current.play();
      } catch (error) {
        // Log an error message to the console if there's an error
        // accessing the camera.
        console.error("Error accessing video stream:", error);
      }
    }
  };

  // TODO: make the camera properly stop
  const stopVideo = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();

      tracks.forEach(track => track.stop());

      videoRef.current.srcObject = null;
    }
  };

  const takePhoto = () => {

    const width = 414;
    const height = width / (16 / 9);

    let video = videoRef.current;
    let photo = photoRef.current;

    let context = photo.getContext("2d");
    context.drawImage(video, 0, 0, width, height);
    setHasPhoto(true);
  };

  const removePhoto = () => {
    let photo = photoRef.current;
    let context = photo.getContext("2d");
    context.clearRect(0, 0, photo.width, photo.height);

    setHasPhoto(false);
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <section className="App flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center  w-full h-full">
        <span>CAMERA</span>
        <div>
          <video ref={videoRef}></video>
        </div>
        <div className="flex justify-center items-center my-2">
          <button onClick={takePhoto} className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[3rem] h-[3rem] rounded-full"></button>
          <button onClick={stopVideo} className="bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Stop Camera</button>
        </div>
      </div>
      <div className={`  flex flex-col justify-center items-center ${hasPhoto ? "" : "hidden"} w-full h-full`}>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <canvas ref={photoRef}></canvas>
        </div>
        <span onClick={removePhoto} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Remove
        </span>
      </div>
    </section>
  );
}

export default App;
