import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useEditEmployeeMutation, useGetEmployeeQuery} from "../../app/services/employees";
import {Layout} from "../../components/layout";
import {EmployeeForm} from "../../components/employeeForm";
import {Row} from "antd";
import {Paths} from "../../Paths";
import {isError} from "../../utils/isError";
import {Employee} from "@prisma/client";

export const EditEmployee = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const params = useParams<{ id: string }>()

    const {data, isLoading} = useGetEmployeeQuery(params.id || '')
    const [editEmployee] = useEditEmployeeMutation()

    if (isLoading) {
        return <span>Loading....</span>
    }

    const handleEditEmployee = async (employee: Employee) => {
        try {
            const update = {
                ...data, ...employee
            }
            await editEmployee(update).unwrap()
            navigate(`${Paths.status}/updated`)
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
            <Row>
                <EmployeeForm title={'Edit employee'}
                              onFinish={handleEditEmployee}
                              btnText={'Edit'}
                              error={error}
                              employee={data}/>
            </Row>
        </Layout>
    );
};

