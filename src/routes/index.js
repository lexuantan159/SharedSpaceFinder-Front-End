import { Home, Spaces, LogIn, Register ,SpaceDetail, Contact,Booking } from '../pages/index';
const router = [
    { path: '/', component: Home },
    { path: '/spaces', component: Spaces },
    { path: '/contact', component: Contact  },
    { path: '/login', component: LogIn },
    { path: '/register', component: Register },
    { path: '/spaces/:spaceId', component: SpaceDetail },
    { path: '/booking', component: Booking },
];

export {router}
