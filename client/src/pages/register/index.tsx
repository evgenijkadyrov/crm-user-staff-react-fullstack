import React, {useState} from 'react';
import {Layout} from "../../components/layout";
import {Card, Form, Row, Space, Typography} from "antd";
import {InputCustom} from "../../components/inputCustom";
import PasswordInput from "../../components/password-input";
import {ButtonCustom} from "../../components/buttonCustom";
import {Link, useNavigate} from "react-router-dom";
import {Paths} from "../../Paths";
import {User} from "@prisma/client";
import {useRegisterMutation} from "../../app/services/auth";
import {isError} from "../../utils/isError";
import {ErrorMessage} from "../../components/errorMessage";

type DataType = Omit<User, 'id'> & { 'confirmPassword': string }

export const Register = () => {
    const [error, setError] = useState('')
    const [register] = useRegisterMutation()
    const navigate = useNavigate()



    const handleRegister = async (data: DataType) => {
        try {
            await register(data).unwrap()
            navigate('/')
        } catch (error) {
            const maybeError = isError(error)
            if (maybeError) {
                setError(error.data.message)
            } else {
                setError('Unknown error')
            }
        }
    }
    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title={"Sing up"} style={{width: "30rem"}}>
                    <Form onFinish={handleRegister}>
                        <InputCustom name={"name"} placeholder={"Name"}/>
                        <InputCustom name={"email"} placeholder={"Email"} type={"email"}/>
                        <PasswordInput name={"password"} placeholder={"password"}/>
                        <PasswordInput name={"confirmPassword"}
                                       placeholder={" confirm password"}/>
                        <ButtonCustom type={"primary"} htmlType={"submit"}>Sing
                            up</ButtonCustom>
                    </Form>
                    <Space direction={"vertical"} size={"large"}>
                        <Typography.Text>
                            Have account? Please, <Link to={Paths.login}>Log in</Link>
                        </Typography.Text>
                    </Space>
<ErrorMessage message={error}/>
                </Card>

            </Row>

        </Layout>
    );
};

