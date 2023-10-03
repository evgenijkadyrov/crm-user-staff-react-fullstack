import React from 'react';
import {Layout} from "../../components/layout"
import {Card, Form, Row, Space, Typography} from "antd";
import {InputCustom} from "../../components/inputCustom";
import PasswordInput from "../../components/password-input";
import {ButtonCustom} from "../../components/buttonCustom";
import {Link} from "react-router-dom";
import {Paths} from "../../Paths";


export const Login = () => {
    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title={"Authorization"} style={{width: "30rem"}}>
                    <Form onFinish={() => null}>
                        <InputCustom name={"email"} placeholder={"email"} type={"email"}/>
                        <PasswordInput name={"password"} placeholder={"password"}/>
                        <ButtonCustom type={"primary"} htmlType={"submit" } >{"Log in"}</ButtonCustom>
                    </Form>
                    <Space direction={"vertical"} size={"large"}>
                        <Typography.Text>
                            No account? Please, <Link to={Paths.register}>Sing up</Link>
                        </Typography.Text>
                    </Space>

                </Card>

            </Row>

        </Layout>

    );
};

