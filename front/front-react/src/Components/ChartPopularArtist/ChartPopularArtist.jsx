import React from "react";
import AvatarImg from "../Avatar/Avatar";
import "./chartpopularartist.css";
import Dots from "../Buttons/Dots/Dots";

const ChartPopularArtist = ({ artists }) => {
  return (
    <div>
      <h1 className="chartPopularArtists__title"> Popular Artists</h1>
      <div className="container_artists_list">
        {artists.map((artist, index) => (
          <div className="item_artist" key={index}>
            <div className="artist_info">
              <AvatarImg className={"small_avatar"} src={artist.image_artist} />
              <div className="artist_info_name">
                <p>{artist.name}</p>
                <p className="artist_followers">
                  {artist.followers} Followers{" "}
                </p>
              </div>
            </div>
            <Dots />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartPopularArtist;
