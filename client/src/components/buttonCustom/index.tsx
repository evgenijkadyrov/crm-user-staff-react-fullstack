import React, {ReactNode} from 'react';
import {Button, Form} from "antd";



type Props = {
    children: React.ReactNode;
    htmlType?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    type?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
    danger?: boolean;
    loading?: boolean | { delay?: number | undefined } | undefined;
    shape?: "default" | "circle" | "round" | undefined;
    icon?: ReactNode

}
export const ButtonCustom: React.FC<Props> = ({
                                                  children,
                                                  htmlType,
                                                  type,
                                                  danger,
                                                  loading,
                                                  shape,
                                                  icon,
                                                  onClick
                                              }) => {
    return (
        <Form.Item>
            <Button
                htmlType={htmlType}
                type={type}
                danger={danger}
                loading={loading}
                shape={shape}
                icon={icon}
                onClick={onClick}>

                {children}</Button>
        </Form.Item>
    );
};

