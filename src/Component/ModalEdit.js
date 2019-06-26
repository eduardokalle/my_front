import React, { useState, useEffect } from 'react';
import { Modal as ModalAnt, Button, Form, Input, InputNumber } from 'antd';
import axios from 'axios';

function ModalEdit({ title, setVisible, setRegistro, visible, registro, dataList, setData, ...props }) {

  const form = props.form;
  const { getFieldDecorator } = form;
  console.log('form', form);

  /* useEffect(() => {
    form.setFieldsValue({
      name: "",
      old: "",
      address: ""
    })
  }, []); */

  const handleSubmit = e => {

    e.preventDefault();
    form.validateFields((err, values) => {
      axios.put(`http://localhost:4000/api/tasks/${registro._id}`, { ...values, old: (values.old).toString() })
        .then((response) => {
          dataList.forEach(item => {
            if (item._id === response.data.task._id) {
              item = {
                ...response.data.task,
                key: response.data.task._id
              }
            }
          });
          setData(dataList);
          form.setFieldsValue({
            name: "",
            old: "",
            address: ""
          });
          setVisible(false);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false);
    // setRegistro({});
  };

  return (
    <div>

      <ModalAnt
        title={title}
        visible={visible}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <Form layout="vertical">
          <Form.Item label="Nombre">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input the title of collection!' }],
              initialValue: registro.name
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Edad">
            {getFieldDecorator('old', { initialValue: registro.old })(<InputNumber min={10} max={100} />)}
          </Form.Item>
          <Form.Item label="Direccion">
            {getFieldDecorator('address', {
              rules: [{ required: true, message: 'Please input the title of collection!' }],
              initialValue: registro.address
            })(<Input />)}
          </Form.Item>


          {/* <div>
        <div>Nombre : </div>
        <Input placeholder="Introduce tu Nombre" value={registro ? registro.name : ""} />
        <br/>
        <div>Edad: </div>
        <InputNumber min={10} max={100} value={registro ? registro.old : 0}  />
        <div>Direccion: </div>
        <Input placeholder="Introduce tu Direccion" value={registro ? registro.address : ""} />
      </div> */}

        </Form>

      </ModalAnt>
    </div>
  );
}

export default Form.create()(ModalEdit);
