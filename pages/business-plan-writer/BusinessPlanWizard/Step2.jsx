import {Form, Input, Radio, Button, InputNumber} from 'antd';
import React from 'react';

const Step2 = ({previousStep, nextStep}) => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        nextStep();
    };

    const radioStyle = {
        fontSize: '15px',
    };

    return (
        <Form onFinish={onFinish} layout="vertical" size="large">
            <Form.Item
                name="businessName"
                label="Your business name (required)"
                rules={[{required: true, message: 'Please input your business name!'}]}
            >
                <Input placeholder="Enter your business name"/>
            </Form.Item>

            <Form.Item
                name="businessDescription"
                label="Your business description (required)"
                rules={[{required: true, message: 'Please input your business description!'}]}
            >
                <Input placeholder="e.g. hotel / restaurant / online clothing store / Auto Repair / Real Estate Agent"
                />
            </Form.Item>

            <Form.Item
                name="numberOfEmployees"
                label="Number of employees (required)"
                rules={[{required: true, message: 'Please input the number of employees!'}]}
            >
                <InputNumber min={0} placeholder="0" style={{width: '20%'}}/>
            </Form.Item>

            <Form.Item
                name="productOrService"
                label="Do you offer a product or service? (required)"
                rules={[{required: true, message: 'Please select an option!'}]}
            >
                <Radio.Group>
                    <Radio style={radioStyle} value="product">Product</Radio>
                    <Radio style={radioStyle} value="service">Service (retail businesses are considered service)</Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item
                name="productServiceAccess"
                label="How can customer get your product or service? (required)"
                rules={[{required: true, message: 'Please select an option!'}]}
            >
                <Radio.Group>
                    <Radio style={radioStyle} value="online">Online</Radio>
                    <Radio style={radioStyle} value="physical">Physical Location</Radio>
                    <Radio style={radioStyle} value="both">Both online and physical location</Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item
                name="serviceArea"
                label="Where do you serve your customers? (required)"
                rules={[{required: true, message: 'Please input your service area!'}]}
            >
                <Input placeholder="E.g. New York City, New York/ London, UK / Europe and US"/>
            </Form.Item>

            <Form.Item style={{textAlign: 'center'}}>
                <Button onClick={previousStep} style={{marginRight: 8, marginTop: 8}}>
                    Back
                </Button>
                <Button type="primary" htmlType="submit" style={{marginTop: 8}}>
                    Next
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Step2;
