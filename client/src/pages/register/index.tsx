import React from 'react';
import {Layout} from "../../components/layout";
import {Card, Form, Row, Space, Typography} from "antd";
import {InputCustom} from "../../components/inputCustom";
import PasswordInput from "../../components/password-input";
import {ButtonCustom} from "../../components/buttonCustom";
import {Link} from "react-router-dom";
import {Paths} from "../../Paths";

export const Register = () => {
    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title={"Sing up"} style={{width: "30rem"}}>
                    <Form onFinish={() => null}>
                        <InputCustom name={"name"} placeholder={"Name"} />
                        <InputCustom name={"email"} placeholder={"Email"} type={"email"}/>
                        <PasswordInput name={"password"} placeholder={"password"}/>
                        <PasswordInput name={"confirmPassword"} placeholder={" confirm password"} />
                        <ButtonCustom type={"primary"} htmlType={"submit" } >Sing up</ButtonCustom>
                    </Form>
                    <Space direction={"vertical"} size={"large"}>
                        <Typography.Text>
                            Have account? Please, <Link to={Paths.login}>Log in</Link>
                        </Typography.Text>
                    </Space>

                </Card>

            </Row>

        </Layout>
    );
};

