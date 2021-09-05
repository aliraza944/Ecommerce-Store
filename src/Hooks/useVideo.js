import { useState } from "react";

const useVideo = () => {
  const [play, setplay] = useState(0);
  const videoplay = () => {
    setplay(1);
  };
  const videostop = () => {
    setplay(0);
  };
  return {
    play,
    videoplay,
    videostop,
  };
};

export default useVideo;
