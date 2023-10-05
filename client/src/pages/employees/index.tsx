import React from 'react';
import {Layout} from "../../components/layout";
import {ButtonCustom} from "../../components/buttonCustom";
import {useGetAllEmployeesQuery} from "../../app/services/employees";
import {Table} from "antd";
import {PlusCircleOutlined} from "@ant-design/icons";
import {ColumnsType} from "antd/es/table";
import {Employee} from "@prisma/client";
import {useNavigate} from "react-router-dom";
import {Paths} from "../../Paths";

const columns: ColumnsType<Employee> = [
    {
        title: 'Name',
        dataIndex: 'firstName',
        key: 'fistName'
    },
    {
        title: 'LastName',
        dataIndex: 'lastName',
        key: 'lastName'
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: 'Address',
        dataIndex: 'adress',
        key: 'adress'
    }
]
export const Employees = () => {
    const navigate = useNavigate()
    const {data, isLoading} = useGetAllEmployeesQuery()
    return (
        <Layout>
            <ButtonCustom type={'primary'} onClick={() => null}
                          icon={<PlusCircleOutlined/>}>
                Add employee
            </ButtonCustom>
            <Table loading={isLoading} dataSource={data} pagination={false}
                   columns={columns} rowKey={(record) => record.id} onRow={(record) => {
                return {
                    onClick: () => navigate(`${Paths.employee}/${record.id}`)

                }
            }}/>
        </Layout>
    );
};

