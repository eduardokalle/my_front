import React, { useState, useEffect } from 'react';
import { Modal as ModalAnt, Button, Form, Input, InputNumber } from 'antd';
import axios from 'axios';
import FormEdit from './FormAdd';
import FormAdd from './FormAdd';

function ModalAdd({ title, setVisibleAdd, visible, setData, dataList, ...props }) {

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
        axios.post('http://localhost:4000/api/tasks', {...values, old: (values.old).toString()})
        .then((response) => {
          dataList.push({ ...response.data.task, key: response.data.task._id  });
          setData(dataList);
          form.setFieldsValue({
            name: "",
            old: "",
            address: ""
          });
          setVisibleAdd(false);
        })
        .catch((error) => {
          console.log(error);
        });       
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
