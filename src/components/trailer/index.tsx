import React, { useState } from "react";
import YouTube from "react-youtube";
import { IMovie, Result } from "../../services/types";
import { IMAGE_PATH } from "../../constants/movies";

interface TrailerProps {
  movie: IMovie | null;
  trailer: Result;
}

const Trailer = ({ movie, trailer }: TrailerProps) => {
  const [playing, setPlaying] = useState(false);
  console.log("movie", movie);
  console.log("trailer", trailer);
  return (
    <>
      {movie ? (
        <div
          className="viewtrailer"
          style={{
            backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
          }}
        >
          {playing ? (
            <>
              <YouTube
                videoId={trailer.key}
                className="reproductor container"
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
              <div className="">
                {trailer ? (
                  <button
                    className="boton"
                    onClick={() => setPlaying(true)}
                    type="button"
                  >
                    Play Trailer
                  </button>
                ) : (
                  "Sorry, no trailer available"
                )}
                <h1 className="text-white">{movie.title}</h1>
                <p className="text-white">{movie.overview}</p>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </>
  );
};

export default Trailer;
