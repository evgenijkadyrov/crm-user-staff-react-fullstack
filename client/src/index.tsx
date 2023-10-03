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
        element: <h1>Home</h1>
    }
])
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConfigProvider theme={{
                algorithm: theme.darkAlgorithm
            }}>

                <RouterProvider router={router}/>
            </ConfigProvider>

        </Provider>
    </React.StrictMode>
);


