import React from 'react';
import { Form, Radio, Button } from 'antd';
import { useLocalStorage } from 'react-use';

const Step1 = ({ nextStep }) => {
    const [form] = Form.useForm();
    // 直接使用useLocalStorage钩子
    const [businessType, setBusinessType] = useLocalStorage('BusinessPlanWizard.step1.businessType', '');
    const [planUsage, setPlanUsage] = useLocalStorage('BusinessPlanWizard.step1.planUsage', '');

    // 表单提交时更新localStorage的值
    const onFinish = (values) => {
        // 使用setter函数更新localStorage的值
        setBusinessType(values.businessType);
        setPlanUsage(values.planUsage);
        nextStep();
    };

    const radioStyle = {
        display: 'block',
        minHeight: '20px',
        lineHeight: '20px',
        fontSize: '15px',
        marginBottom: '20px',
    };

    return (
        <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            size="large"
            initialValues={{ businessType: businessType, planUsage: planUsage }}
        >
            <Form.Item
                name="businessType"
                label="Is this an existing or an upcoming business?"
                rules={[{ required: true, message: 'Please select an option!' }]}
            >
                <Radio.Group>
                    <Radio style={radioStyle} value="existing">Existing business</Radio>
                    <Radio style={radioStyle} value="upcoming">Upcoming unlaunched business</Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item
                name="planUsage"
                label="What will you use this business plan for?"
                rules={[{ required: true, message: 'Please select an option!' }]}
            >
                <Radio.Group>
                    <Radio style={radioStyle} value="investors">To be used to request fund from investors</Radio>
                    <Radio style={radioStyle} value="banks">To be used to request fund from banks</Radio>
                    <Radio style={radioStyle} value="selfLearning">For self-learning</Radio>
                    <Radio style={radioStyle} value="schoolProject">To be used as reference for school/university project</Radio>
                    <Radio style={radioStyle} value="workplaceProject">To be used as reference for workplace projects</Radio>
                    <Radio style={radioStyle} value="nonFinancial">To be used to submit to a non-financial institution for approval</Radio>
                    <Radio style={radioStyle} value="other">Other reasons</Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item style={{ textAlign: 'center' }}>
                <Button type="primary" htmlType="submit" style={{ marginTop: '20px' }}>
                    Next
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Step1;
