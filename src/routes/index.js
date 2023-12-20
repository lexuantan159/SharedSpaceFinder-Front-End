import {
  Home,
  Spaces,
  LogIn,
  Register,
  SpaceDetail,
  PostSpaceHome,
  FavoriteSpace,
  ManagePostHome,
  Editprofile,
  MessengeHome,
  Contact,
  Booking,
  Sharing,
} from "../pages/index";

import Dashboard from "../components/admin/Dashboard";
import Owner from "../components/admin/Owner";
import User from "../components/admin/User";
import { LayoutAdmin, LayoutAuth, LayoutUser } from "../layouts/index";
import PostSpace from "../components/admin/PostSpace";
import Notification from "../components/admin/Notification";

const router = [
  { path: "/", component: Home },
  { path: "/spaces", component: Spaces },
  { path: "/contact", component: Contact },
  { path: "/login", layout: LayoutAuth, component: LogIn },
  { path: "/register", layout: LayoutAuth, component: Register },
  { path: "/spaces/:spaceId", component: SpaceDetail },
  { path: "/booking", component: Booking },
  { path: "/sharing", component: Sharing },
  { path: "/profile", layout: LayoutUser, component: Editprofile },
  { path: "/post-spaces", layout: LayoutUser, component: PostSpaceHome },
  { path: "/messenger", layout: LayoutUser, component: MessengeHome },
  { path: "/manage-post", layout: LayoutUser, component: ManagePostHome },
  { path: "/favorite-space", layout: LayoutUser, component: FavoriteSpace },
  { path: "/spaces/:spaceId", component: SpaceDetail },
  { path: "/admin/dashboard", layout: LayoutAdmin, component: Dashboard },
  { path: "/admin/user", layout: LayoutAdmin, component: User },
  { path: "/admin/owner", layout: LayoutAdmin, component: Owner },
  { path: "/admin/notification", layout: LayoutAdmin, component: Notification },
  // { path: "/admin/posts-space", layout: LayoutAdmin, component: PostSpaceHome },
  {
    path: "/admin/posts-space/:statusId",
    layout: LayoutAdmin,
    component: PostSpace,
  },
];

export { router };
