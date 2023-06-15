import React, {useEffect, useState} from 'react';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import {Button, Col, Form, Input, message, Row} from "antd";
import Loading from "../../../../../components/shared-components/Loading";
import {useParams} from "react-router-dom";
import {useForm} from "antd/es/form/Form";

const UserEdit = () => {
    const {id} = useParams()
    const [isLoading,setIsLoading] = useState(false)
    const [form] = useForm()
    let defaultValues = {
        name: '',
        email: '',
        username: '',
        phoneNumber: '',
        website: '',
        address: '',
        city: '',
        postcode: ''
    }

    useEffect(()=>{
        const fetchUser = async () => {
            setIsLoading(true)
            await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(response=>{
                if (response.ok) {
                    response.json().then(data=>{
                        form.setFieldsValue({
                            name: data.name,
                            email: data.email,
                            username: data.username,
                            phoneNumber: data.phone,
                            website: data.website,
                            address: data.address.street,
                            city: data.address.city,
                            postcode: data.address.zipcode
                        })
                    })
                }
            })
            setIsLoading(false)
        }
        fetchUser()
    },[])

    const onFinish = values => {
        const key = 'updatable';
        message.loading({ content: 'Updating...', key });
        setTimeout(() => {message.success({ content: 'Done!', key, duration: 2 })}, 1000);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    if (isLoading) {
        return (<Loading cover='content'/>)
    }

    return (
        <>
            <div className="mt-4">
                <Form
                    form={form}
                    name="basicInformation"
                    layout="vertical"
                    initialValues={defaultValues}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={16}>
                            <Row gutter={ROW_GUTTER}>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Name"
                                        name="name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your name!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!'
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[{
                                            required: true,
                                            type: 'email',
                                            message: 'Please enter a valid email!'
                                        }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Phone Number"
                                        name="phoneNumber"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Website"
                                        name="website"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24}>
                                    <Form.Item
                                        label="Address"
                                        name="address"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="City"
                                        name="city"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Post code"
                                        name="postcode"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button type="primary" htmlType="submit">
                                Save Change
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    );
};

export default UserEdit;
