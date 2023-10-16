import { Routes, Route } from 'react-router-dom';
import { router, routerAdmin } from './routes/index';
import { Layout } from './layouts/index'
import LayoutAdmin  from './layouts/LayoutAdmin';

function App() {
  return (
    <>
        <Routes>
            <Route element={<Layout hideHeaderPaths={['/login' , '/register']} />}>
                {router.map((route, index) => {
                    return <Route key={index} path={route.path} element={
                            <route.component />
                    }></Route>;
                })}
            </Route>
            <Route element={<LayoutAdmin hideHeaderPaths={['/admin/']}/>}>
              {routerAdmin.map((route, index) => {
                    return <Route key={index} path={route.path} element={
                            <route.component />
                    }></Route>;
                })}
            </Route>
        </Routes>
    </>
  );
}

export default App;
