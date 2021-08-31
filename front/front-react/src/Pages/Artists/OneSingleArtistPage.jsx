import React from "react";
import CardSong from "../../Components/CardSong/CardSong";
import Slider from "../../Components/Slider/Slider";
import Typography from "../../Components/Typography/Typography";
import { albums } from "../../Constant/Albums/fakedataAlbums";
import { Tracks } from "../../Constant/Tracks/fakedataTracks";
import "./artistspage.css";

const OneSingleArtistPage = ({ artist }) => {
  return (
    <>
      <div className="single_artist_page_info_container">
        <div className="single_artist_page_info_image">
          <img src={artist.image_artist} alt="artist_image_profile" />
        </div>
        <div className="single_artist_page_info_titles">
          <Typography name={artist.name} className="display_h1" />
          <Typography
            name={artist.followers + "  abonnés"}
            className="display_username"
          />
        </div>
        <div className="btn_follow"> S'abonner </div>
      </div>
      <div className="horizontal_grid_container">
        <div className="horizontal_grid_container_item">
          <Typography name="Populaires" className="display_subtitles_pages" />
          <div className="single_artist_page_popular_listsong">
            {Tracks.map((track, index) => (
              <CardSong key={index} song={track} />
            ))}
          </div>
        </div>
        <div className="horizontal_grid_container_item">
          <Typography name="Albums" className="display_subtitles_pages" />
          <Slider albums={albums} id_slider={"slider_Trends_albumspage"} />
        </div>
        <div className="horizontal_grid_container_item">
          <Typography name="Singles " className="display_subtitles_pages" />
          <Slider albums={albums} id_slider={"slider_Trends_albumspage"} />
        </div>
      </div>
    </>
  );
};

export default OneSingleArtistPage;
