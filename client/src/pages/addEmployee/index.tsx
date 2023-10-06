import React, {useEffect, useState} from 'react';
import {Layout} from "../../components/layout";
import {Row} from "antd";
import {EmployeeForm} from "../../components/employeeForm";
import {useNavigate} from "react-router-dom";
import {useAddEmployeeMutation} from "../../app/services/employees";
import {useSelector} from "react-redux";
import {selectIsAuthentication} from "../../features/auth/authSlice";
import {Paths} from "../../Paths";
import {Employee} from "@prisma/client";
import {isError} from "../../utils/isError";

export const AddImployee = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const [addEmployee] = useAddEmployeeMutation()
    const isAutherization = useSelector(selectIsAuthentication)
    const handleAddEmployee = async (data: Employee) => {
        try {
            await addEmployee(data).unwrap()
            navigate(`${Paths.status}/created`)
        } catch (error) {
            const maybeError = isError(error)
            if (maybeError) {
                setError(error.data.message)
            } else{setError('Unknown error')}
        }
    }
    useEffect(() => {
        if (!isAutherization) {
            navigate(Paths.login)
        }
    }, [isAutherization, navigate])
    return (

            <Row>
                <EmployeeForm title={'Add employee'}
                              onFinish={handleAddEmployee}
                              btnText={'Add'}
                              error={error}/>
            </Row>

    );
};

