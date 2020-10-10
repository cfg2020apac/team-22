
import Data from "views/Data.jsx";
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Courses from "views/Courses.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import Badges from "views/Badges";
import Friends from "views/Friends";
import Submission from "views/Submission";
import Login from "pages/Login/Login";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-notebook",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/data",
    name: "Data",
    icon: "pe-7s-graph",
    component: Data,
    layout: "/admin"
  },
  {
    path: "/badges",
    name: "Badges",
    icon: "pe-7s-diamond",
    component: Badges,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/friends",
    name: "Friends",
    icon: "pe-7s-smile",
    component: Friends,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Leaderboard",
    icon: "pe-7s-rocket",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Courses",
    icon: "pe-7s-news-paper",
    component: Courses,
    layout: "/admin"
  },
  {
    path: "/submission",
    name: "Submission",
    icon: "pe-7s-notebook",
    component: Submission,
    layout: "/admin"
  }
];

export default dashboardRoutes;
