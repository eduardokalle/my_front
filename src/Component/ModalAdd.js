import React, { useState, useEffect } from 'react';
import { Modal as ModalAnt, Button, Form, Input, InputNumber } from 'antd';
import axios from 'axios';
import FormEdit from './FormAdd';
import FormAdd from './FormAdd';

function ModalAdd({ title, setVisibleAdd, visible, ...props }) {

  const [setData] = useState([]);

  console.log('visible == ', visible);

  const form = props.form;

  const handleCancel = e => {
    console.log(e);
    setVisibleAdd(false);

  };

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        setVisibleAdd(false);
      }
    });
  };

  return (
    <ModalAnt
      visible={visible}
      title="Agregar Usuario"
      okText="Create"
      onCancel={handleCancel}
      onOk={handleSubmit}
    >      
      <Form layout="vertical">
        <FormAdd form={form} Item={Form.Item} />
      </Form>
    </ModalAnt> 
  );
}

export default Form.create()(ModalAdd);
