import React, {useState} from 'react';
import {Layout} from "../../components/layout"
import {Card, Form, Row, Space, Typography} from "antd";
import {InputCustom} from "../../components/inputCustom";
import PasswordInput from "../../components/password-input";
import {ButtonCustom} from "../../components/buttonCustom";
import {Link, useNavigate} from "react-router-dom";
import {Paths} from "../../Paths";
import {useLoginMutation, UserData} from "../../app/services/auth";
import {isError} from "../../utils/isError";
import {ErrorMessage} from "../../components/errorMessage";


export const Login = () => {
    const [loginUser, loginUserResult] = useLoginMutation()
    const [error, setError] = useState('')
    const navigate= useNavigate()
    const login = async (data: UserData) => {
        try {
            await loginUser(data).unwrap()
            navigate(Paths.home)
        } catch (err) {

            const maybeError = isError(err)
            if (maybeError) {
                setError(err.data.message)
            } else {
                setError('Unknown error')
            }
        }
    }
    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title={"Authorization"} style={{width: "30rem"}}>
                    <Form onFinish={login}>
                        <InputCustom name={"email"} placeholder={"email"} type={"email"}/>
                        <PasswordInput name={"password"} placeholder={"password"}/>
                        <ButtonCustom type={"primary"} htmlType={"submit"}>Log
                            in</ButtonCustom>
                    </Form>
                    <Space direction={"vertical"} size={"large"}>
                        <Typography.Text>
                            No account? Please, <Link to={Paths.register}>Sing up</Link>
                        </Typography.Text>
                        <ErrorMessage message={error}/>
                    </Space>

                </Card>

            </Row>

        </Layout>

    );
};

