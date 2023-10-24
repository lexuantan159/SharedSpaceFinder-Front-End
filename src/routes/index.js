
import { Home, Spaces, LogIn, Register ,SpaceDetail, Contact, Profile, PostSpace, Messenge, ManagePost, FavoriteSpace,Booking, Sharing } from '../pages/index';

import Dashboard from '../components/admin/Dashboard';
import Owner from '../components/admin/Owner';
import User from '../components/admin/User';
import Admin from '../pages/admin/Admin';
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
    { path: '/postspaces', component: PostSpace },
    { path: '/messenge', component: Messenge },
    { path: '/managepost', component: ManagePost },
    { path: '/favoritespace', component: FavoriteSpace },
    { path: '/spaces/:spaceId', component: SpaceDetail },
];
export const routerAdmin = [
    { path: '/admin/dashboard', layout: '/admin', component: Dashboard},
    { path: '/admin/user', layout: '/admin', component: User},
    { path: '/admin/owner', layout: '/admin', component: Owner},
    { path: '/admin/postspace', layout: '/admin', component: PostSpace}
]

export {router}
