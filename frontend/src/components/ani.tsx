import React from "react";

const ani = "/anime-dance.gif";

const GifVideo: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <img src={ani} alt="Animated GIF" width={200} height={200} className="rounded-lg shadow-lg" />
    </div>
  );
};

export default GifVideo;
