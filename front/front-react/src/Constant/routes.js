import Albumspage from "../Pages/Albums/Albumspage";
import Artistspage from "../Pages/Artists/Artistspage"
import FavorisPage from "../Pages/Playlists/FavorisPage";
import Homepage from "../Pages/Home/Homepage";
import RecentlyPlayedpage from "../Pages/Playlists/RecentlyPlayedpage";
import Genrespage from "../Pages/Genres/GenresPage";
import OneSingleArtistPage from "../Pages/Artists/OneSingleArtistPage";

const userPath = "/user";


export const UserRoutes = [
    {
        path: `${userPath}/discovery`,
        component: Homepage
    },
    {
        path: `${userPath}/albums`,
        component: Albumspage
    },
    {
        path: `${userPath}/artists`,
        component: Artistspage
    },
    {
        path: `${userPath}/artists/:id`,
        component: OneSingleArtistPage
    },
    {
        path: `${userPath}/genres`,
        component: Genrespage
    },
    {
        path: `${userPath}/Recently-played`,
        component: RecentlyPlayedpage
    },
    {
        path: `${userPath}/favoris`,
        component: FavorisPage
    }
];