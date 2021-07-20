//import icons
import DiscoveryIcon from "../../Assets/svgs/DiscoveryIcon";
import AlbumIcon from "../../Assets/svgs/AlbumIcon";
import ArtistIcon from "../../Assets/svgs/ArtistIcon";
import FavorisIcon from "../../Assets/svgs/FavorisIcon";
import GenreIcon from "../../Assets/svgs/GenreIcon";
import PlaylistIcon from "../../Assets/svgs/PlaylistIcon";
import RecentIcon from "../../Assets/svgs/RecentIcon";



const userDefaultUrl = "/#";
export const userDefaultIdentif = "discovery";

export const userDash = [
    {
        Icon: DiscoveryIcon,
        identif: "discovery",
        name: "Discovery",
        url: `${userDefaultUrl}`
    },
    {
        Icon: AlbumIcon,
        identif: "albums",
        name: "Albums",
        url: `${userDefaultUrl}`
    },
    {
        Icon: ArtistIcon,
        identif: "artists",
        name: "Artists",
        url: `${userDefaultUrl}`
    },
    {
        Icon: GenreIcon,
        identif: "genre",
        name: "Genre",
        url: `${userDefaultUrl}`
    },
    {
        Icon: PlaylistIcon,
        identif: "playlist",
        name: "Playlists",
        url: `${userDefaultUrl}`
    },
    {
        Icon: FavorisIcon,
        identif: "favoris",
        name: "Favoris",
        url: `${userDefaultUrl}`
    },
    {
        Icon: RecentIcon,
        identif: "recentlyplayed",
        name: "Recently Played",
        url: `${userDefaultUrl}`
    }
];



