
import { Home, Spaces, LogIn, Register ,SpaceDetail, Contact, Profile, PostSpace, Messenge, ManagePost, FavoriteSpace,Booking, Sharing } from '../pages/index';

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
];

export {router}
