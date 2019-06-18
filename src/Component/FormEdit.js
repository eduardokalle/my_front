/*
import React, { useState, useEffect } from 'react';
import { Modal as ModalAnt, Button, Form, Input, InputNumber } from 'antd';

const FormEdit = (props) => {

    const { getFieldDecorator } = props.form;

    const handleChange = event => {

    }

    const handleSubmit = e => {
        e.preventDefault();
           props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Item label="Nombre ">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Por favor Introduce tu Nombre!' }],
          })(
            <Input placeholder="Introduce tu Nombre"  onChange={handleChange} />,
          )}
        </Form.Item>
        <Form.Item label="Edad">
          {getFieldDecorator('old', {
            rules: [{ required: true, message: 'Por favor Introduce tu Edad!' }],
          })(
            <InputNumber id="NE" min={10} max={100} defaultValue={15} onChange={handleChange} />,
          )}
        </Form.Item>

        <Form.Item label="Direccion">
          {getFieldDecorator('address', {
            rules: [{ required: true, message: 'Por favor Introduce tu Direccion !' }],
          })(
            <Input placeholder="Introduce tu Direccion" onChange={handleChange} />,
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
            Saved
          </Button>
      </Form>
    );
}

export default Form.create()(FormEdit);
*/