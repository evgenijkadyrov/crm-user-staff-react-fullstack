import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from '../src/app/store';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Paths} from "../src/Paths";
import {Login} from "../src/pages/login";
import {Register} from "../src/pages/register";
import {ConfigProvider, theme} from "antd";
import {Auth} from "../src/features/auth/auth";
import {Employees} from "../src/pages/employees";
import {AddImployee} from "./pages/addEmployee";
import {Status} from "../src/pages/ststus";
import {Employee} from "../src/pages/employee";

const container = document.getElementById('root')!;
const root = createRoot(container);
const router = createBrowserRouter([{
    path: Paths.login,
    element: <Login/>
},
    {
        path: Paths.register,
        element: <Register/>
    },
    {
        path: Paths.home,
        element: <Employees/>
    },
    {
        path: Paths.employeeAdd,
        element: <AddImployee/>
    },
    {
        path: `${Paths.status}/:status`,
        element: <Status/>
    },
    {
        path: `${Paths.employee}/:id`,
        element: <Employee/>
    },
])
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConfigProvider theme={{
                algorithm: theme.darkAlgorithm
            }}>
                <Auth>
                    <RouterProvider router={router}/>
                </Auth>
            </ConfigProvider>

        </Provider>
    </React.StrictMode>
);


