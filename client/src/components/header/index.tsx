import React from 'react';
import s from './index.module.css'
import {Layout, Space, Typography} from "antd";
import {LoginOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {ButtonCustom} from "../../components/buttonCustom";
import {Link, useNavigate} from "react-router-dom";
import {Paths} from "../../Paths";
import {useSelector} from "react-redux";
import {logout, selectIsAuthentication} from "../../features/auth/authSlice";
import {useAppDispatch} from "../../app/hooks";

const Header = () => {
    const isAutherization = useSelector(selectIsAuthentication)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const logoutHandler = () => {
        dispatch(logout())
        localStorage.removeItem('token')
        navigate(Paths.login)
    }
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
            {isAutherization ? (
                <ButtonCustom icon={<LoginOutlined/>} onClick={logoutHandler}
                              type={"primary"}>
                    Log out
                </ButtonCustom>) : (
                <Space>
                    <Link to={Paths.register}>
                        <ButtonCustom icon={<UserOutlined/>}>Registration</ButtonCustom>
                    </Link>
                    <Link to={Paths.login}>
                        <ButtonCustom icon={<LoginOutlined/>}>Login</ButtonCustom>
                    </Link>
                </Space>)}

        </Layout.Header>
    );
};

export default Header;