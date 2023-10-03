import React from 'react';
import {Form, Input} from "antd";

type Props = {
    name: string;
    placeholder: string;
    type?: string
}
export const InputCustom: React.FC<Props> = ({name, placeholder, type = "text"}) => {
    return (
        <Form.Item name={name} shouldUpdate={true}
                   rules={[{required:true, message:"required field"}]}
        >
            <Input
                placeholder={placeholder}
                type={type}
                size={"large"}/>
        </Form.Item>
    );
};

