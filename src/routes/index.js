import { Home, Spaces, LogIn, Register } from '../pages/index';
const router = [
    { path: '/', component: Home },
    { path: '/spaces', component: Spaces },
    { path: '/login', component: LogIn },
    { path: '/register', component: Register },
];

export {router}
