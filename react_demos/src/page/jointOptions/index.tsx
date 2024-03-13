import React from 'react';
import { Select, Space } from 'antd';

const { Option } = Select;

const JointOptions = () => {
    return (
        <Space direction="vertical">
            <Space.Compact block>
                <Select defaultValue="Option1-1">
                    <Option value="Option1-1">Option1-1</Option>
                    <Option value="Option1-2">Option1-2</Option>
                </Select>
                <Select defaultValue="Option2-2" style={{width: 300}}>
                    <Option value="Option2-1">Option2-1</Option>
                    <Option value="Option2-2">Option2-2</Option>
                </Select>
            </Space.Compact>
        </Space>
    );
};

export default JointOptions;