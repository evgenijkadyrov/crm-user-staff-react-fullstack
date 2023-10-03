import React from 'react';
import s from './index.module.css'
import {Layout, Space, Typography} from "antd";
import {LoginOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {ButtonCustom} from "../../components/buttonCustom";
import {Link} from "react-router-dom";
import {Paths} from "../../Paths";

const Header = () => {
    return (
        <Layout.Header className={s.header}>
            <Space>
                <TeamOutlined className={s.teamIcon}/>
                <Link to={Paths.home}>
                    <ButtonCustom type={'text'}>
                        <Typography.Title level={1}>Сотрудники</Typography.Title>
                    </ButtonCustom>
                </Link>
            </Space>
            <Space>
                <Link to={Paths.register}>
                    <ButtonCustom icon={<UserOutlined/>}>Registration</ButtonCustom>
                </Link>
            </Space>
            <Space>
                <Link to={Paths.login}>
                    <ButtonCustom icon={<LoginOutlined/>}>Login</ButtonCustom>
                </Link>
            </Space>
        </Layout.Header>
    );
};

export default Header;