import React from 'react';
import {Button, Result, Row} from "antd";
import {Link, useParams} from "react-router-dom";

const Statuses: Record<string, string> = {
    created: 'Employee success created',
    updated: 'Employee success updated',
    removed: 'Employee success removed',
}
export const Status = () => {
    const {status} = useParams()
    return (
        <Row align={'middle'} style={{width: '100%'}} justify={"center"}>
            <Result title={status ? Statuses[status] : 'Not find'}
                    status={status ? 'success' : 404}
                    extra={
                        <Button key={'dashboard'}>
                            <Link to={'/'}>On main page</Link>
                        </Button>
                    }/>
        </Row>
    );
};

