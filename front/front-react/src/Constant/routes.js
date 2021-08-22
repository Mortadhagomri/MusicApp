import Albumspage from "../Pages/Albumspage";
import Artistspage from "../Pages/Artistspage"
import FavorisPage from "../Pages/FavorisPage";
import Homepage from "../Pages/Homepage";
import RecentlyPlayedpage from "../Pages/RecentlyPlayedpage";

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
        path: `${userPath}/genres`,
        component: Albumspage
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