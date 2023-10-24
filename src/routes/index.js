import Dashboard from '../components/admin/Dashboard';
import Owner from '../components/admin/Owner';
import PostSpace from '../components/admin/PostSpace';
import User from '../components/admin/User';
import Admin from '../pages/admin/Admin';
import { Home, Spaces, LogIn, Register ,SpaceDetail, Contact } from '../pages/index';
const router = [
    { path: '/', component: Home },
    { path: '/spaces', component: Spaces },
    { path: '/contact', component: Contact  },
    { path: '/login', component: LogIn },
    { path: '/register', component: Register },
    { path: '/spaces/:spaceId', component: SpaceDetail },    
    
];
export const routerAdmin = [
    { path: '/admin/dashboard', layout: '/admin', component: Dashboard},
    { path: '/admin/user', layout: '/admin', component: User},
    { path: '/admin/owner', layout: '/admin', component: Owner},
    { path: '/admin/postspace', layout: '/admin', component: PostSpace}
]

export {router}
