//import icons
import DiscoveryIcon from "../../Assets/svgs/DiscoveryIcon";
import AlbumIcon from "../../Assets/svgs/AlbumIcon";
import ArtistIcon from "../../Assets/svgs/ArtistIcon";
import FavorisIcon from "../../Assets/svgs/FavorisIcon";
import GenreIcon from "../../Assets/svgs/GenreIcon";
import PlaylistIcon from "../../Assets/svgs/PlaylistIcon";
import RecentIcon from "../../Assets/svgs/RecentIcon";



const userDefaultUrl = "/user";
export const userDefaultIdentif = "discovery";

export const userDash = [
    {
        Icon: DiscoveryIcon,
        identif: "discovery",
        name: "Discovery",
        url: `${userDefaultUrl}/discovery`
    },
    {
        Icon: AlbumIcon,
        identif: "albums",
        name: "Albums",
        url: `${userDefaultUrl}/albums`
    },
    {
        Icon: ArtistIcon,
        identif: "artists",
        name: "Artists",
        url: `${userDefaultUrl}/artists`
    },
    {
        Icon: GenreIcon,
        identif: "genre",
        name: "Genre",
        url: `${userDefaultUrl}/genres`
    },
    {
        Icon: PlaylistIcon,
        identif: "playlist",
        name: "Playlists",
        url: `${userDefaultUrl}/my-playlists`
    },
    {
        Icon: FavorisIcon,
        identif: "favoris",
        name: "Favoris",
        url: `${userDefaultUrl}/favoris`
    },
    {
        Icon: RecentIcon,
        identif: "recentlyplayed",
        name: "Recently Played",
        url: `${userDefaultUrl}/Recently-played`
    },
    {
        Icon: PlaylistIcon,
        identif: "playlist",
        name: "Playlist 1",
        url: `${userDefaultUrl}/Myplaylists/:id`
    }

];



