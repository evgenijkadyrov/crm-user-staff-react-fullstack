import React from 'react';
import {Card, Form, Row, Space} from "antd";
import {InputCustom} from "../../components/inputCustom";
import {Layout} from "../../components/layout";
import {Employee} from "@prisma/client";
import {ErrorMessage} from "../../components/errorMessage";
import {ButtonCustom} from "../../components/buttonCustom";

type Props<T> = {
    onFinish: (values: T) => void,
    btnText: string,
    title: string,
    employee?: T,
    error?: string
}
export const EmployeeForm: React.FC<Props<Employee>> = ({
                                                            onFinish,
                                                            title,
                                                            employee, btnText, error
                                                        }) => {
        return (
            <Layout>
                <Row align="middle" justify="center">
                    <Card title={title} style={{width: "30rem"}}>
                        <Form name={'employee-form'} onFinish={onFinish}
                              initialValues={employee}>
                            <InputCustom name={"firstName"} placeholder={"firstName"}/>
                            <InputCustom name={"lastName"} placeholder={"lastName"}/>
                            <InputCustom name={"age"} placeholder={"age"} type={"number"}/>
                            <InputCustom name={"adress"} placeholder={"address"}/>
                            <Space>
                                <ErrorMessage message={error}/>
                                <ButtonCustom htmlType={'submit'}>
                                    {btnText}
                                </ButtonCustom>
                            </Space>

                        </Form>


                    </Card>

                </Row>

            </Layout>
        );
    }
;
