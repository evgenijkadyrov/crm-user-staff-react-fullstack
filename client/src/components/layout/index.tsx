import React from 'react';
import s from './index.module.css'
import {Layout as AntLayout} from "antd";
import Header from "../../components/header";

type Props = {
    children: React.ReactNode
}

export const Layout: React.FC<Props> = ({children}) => {
    return (
        <div className={s.main}>
            <Header/>
            <AntLayout style={{height: '100%'}}>

                {children}
            </AntLayout>
        </div>
    );
};

