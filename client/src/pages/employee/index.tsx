import React, {useState} from 'react';
import {Layout} from "../../components/layout";
import {Link, Navigate, useNavigate, useParams} from "react-router-dom";
import {
    useGetEmployeeQuery,
    useRemoveEmployeeMutation
} from "../../app/services/employees";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/auth/authSlice";
import {Descriptions, Divider, Modal, Space} from "antd";
import {ButtonCustom} from "../../components/buttonCustom";
import {Paths} from "../../Paths";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {isError} from "../../utils/isError";

export const Employee = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const params = useParams<{ id: string }>()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const {data, isLoading} = useGetEmployeeQuery(params.id || '')
    const [removeEmployee] = useRemoveEmployeeMutation()
    const user = useSelector(selectUser)
    if (isLoading) {
        return <span>Loading...</span>
    }
    if (!data) {
        return <Navigate to={'/'}/>
    }
const showModal=()=>{
        setIsModalOpen(true)
}
    const hideModal=()=>{
        setIsModalOpen(false)
    }
    const handleRemoveEmployee=async ()=>{
        hideModal()
        try{
            await removeEmployee(data.id).unwrap()
            navigate(`${Paths.status}/removed`)
        } catch (error) {
            const maybeError = isError(error)
            if (maybeError) {
                setError(error.data.message)
            } else{setError('Unknown error')}
        }
    }
    return (
        <Layout>

            <Descriptions title={"Employee information"} bordered
                          style={{width: '50rem'}}>
                <Descriptions.Item label={'Name'} span={3}>
                    {`${data.firstName} ${data.lastName}`}
                </Descriptions.Item>
                <Descriptions.Item label={'Age'} span={3}>
                    {data.age}
                </Descriptions.Item>
                <Descriptions.Item label={'Address'} span={3}>
                    {data.adress}
                </Descriptions.Item>
            </Descriptions>
            {user?.id===data.userId &&(
                <>
                    <Divider orientation={"left"} >
Actions
                    </Divider>
                    <Space>
                        <Link to={`${Paths.employeeEdit}/${data.id}`}>
                            <ButtonCustom
                            shape={'round'}
                            icon={<EditOutlined/>}
                            type={"default"}>
                                Edit
                            </ButtonCustom>
                        </Link>
                        <ButtonCustom
                            shape={'round'}
                            icon={<DeleteOutlined/>}
                            danger
                        onClick={showModal}
                        >
                            Remove
                        </ButtonCustom>
                    </Space>
                    <Modal
                    title={'Confirm remove'}
                    open={isModalOpen}
                    onOk={handleRemoveEmployee}
                    onCancel={hideModal}
                    okText={'ok'}
                    cancelText={'cancel'}
                    >
                        Are you really want to remove employee?
                    </Modal>
                </>
            )}
        </Layout>
    );
};

