import React from "react";
import Dots from "../Buttons/Dots/Dots";
import PlayButton from "../Buttons/PlayButton/PlayButton";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import "./listsongs.css";

const ListSongs = ({ playlistTracks }) => {
  return (
    <div className="listsongs_container">
      <table>
        <thead>
          <th className="track_index_th">#</th>
          <th className="track_info_th">TRACK</th>
          <th className="track_album_th">ALBUM</th>
          <th className="track_action_th">
            <AccessTimeIcon fontSize="medium" />
          </th>
        </thead>
        <tbody>
          {playlistTracks.map((playlistTrack, index) => (
            <tr>
              <td className="track_index_td">{index + 1}</td>
              <td>
                <div className="track_info_td">
                  <img src={playlistTrack.imgalbum} alt="" />
                  {playlistTrack.title} - {playlistTrack.artist}
                </div>
              </td>
              <td className="track_album_td">{playlistTrack.album}</td>
              <td>
                <div className="track_action_td">
                  <PlayButton url={playlistTrack.preview} />
                  {playlistTrack.duration}
                  <Dots />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListSongs;
