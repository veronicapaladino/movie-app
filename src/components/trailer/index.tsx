import React, { useState } from "react";
import YouTube from "react-youtube";
import { IMovie, Result } from "../../services/types";
import { IMAGE_PATH } from "../../constants/movies";

interface TrailerProps {
  selectedMovie: IMovie | null;
  trailer: Result;
}

const Trailer = ({ selectedMovie, trailer }: TrailerProps) => {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      {selectedMovie ? (
        <div
          className="viewtrailer"
          style={{
            backgroundImage: `url("${IMAGE_PATH}${selectedMovie.backdrop_path}")`,
          }}
        >
          {playing ? (
            <>
              <YouTube
                videoId={trailer.key}
                className="reproductor"
                opts={{
                  width: "100%",
                  height: "100%",
                  playerVars: {
                    autoplay: 1,
                    controls: 0,
                    cc_load_policy: 0,
                    fs: 0,
                    iv_load_policy: 0,
                    modestbranding: 0,
                    rel: 0,
                    showinfo: 0,
                  },
                }}
              />
              <button onClick={() => setPlaying(false)} className="boton">
                Close
              </button>
            </>
          ) : (
            <div className="container">
              <div className="container__content">
                {trailer ? (
                  <button
                    className="container__boton"
                    onClick={() => setPlaying(true)}
                    type="button"
                  >
                    Play Trailer
                  </button>
                ) : (
                  "Sorry, no trailer available"
                )}
                <h1 className="container__title">{selectedMovie.title}</h1>
                <p className="container__overview">{selectedMovie.overview}</p>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </>
  );
};

export default Trailer;
