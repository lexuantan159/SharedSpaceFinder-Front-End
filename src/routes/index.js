
import { Home, Spaces, LogIn, Register ,SpaceDetail, Contact, Profile, PostSpace, Messenge, ManagePost, FavoriteSpace,Booking, Sharing } from '../pages/index';

import Dashboard from '../components/admin/Dashboard';
import Owner from '../components/admin/Owner';
import User from '../components/admin/User';
import  {LayoutAdmin} from "../layouts/index";

const router = [
    { path: '/', component: Home },
    { path: '/spaces', component: Spaces },
    { path: '/contact', component: Contact  },
    { path: '/login', component: LogIn },
    { path: '/register', component: Register },
    { path: '/spaces/:spaceId', component: SpaceDetail },
    { path: '/booking', component: Booking },
    { path: '/sharing', component: Sharing },
    { path: '/profile', component: Profile },
    { path: '/post-spaces', component: PostSpace },
    { path: '/messenger', component: Messenge },
    { path: '/manage-post', component: ManagePost },
    { path: '/favorite-space', component: FavoriteSpace },
    { path: '/spaces/:spaceId', component: SpaceDetail },
    { path: '/admin/dashboard', layout: LayoutAdmin, component: Dashboard},
    { path: '/admin/user', layout: LayoutAdmin, component: User},
    { path: '/admin/owner', layout: LayoutAdmin, component: Owner},
    { path: '/admin/posts-pace', layout: LayoutAdmin, component: PostSpace}
];


export {router}
