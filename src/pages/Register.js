import React from 'react'
import { Form, Input, Button } from 'antd';

const { Password } = Input;

const fields = [
  {
    key: 'name',
    label: 'Nombre',
    options: {
      rules: [{ required: true, message: 'Please input your name!' }],
    },
    component: <Input placeholder="Nombre" />
  },
  {
    key: 'mail',
    label: 'Correo',
    options: {
        rules: [
            { required: true, message: 'Please input your mail!' },
            { type: 'email', message: 'The input is not valid E-mail!'}
        ],
      },
    component: <Input placeholder="Correo" />
  },
  {
    key: 'password',
    label: 'Contraseña',
    options: {
        rules: [{ required: true, message: 'Please input your password!' }],
      },
    component: <Password placeholder="Contraseña" />
  },
  {
    key: 'confirm_password',
    label: 'Confirmar Contraseña',
    options: {
        rules: [{ required: true, message: 'Please input your password!' }],
      },
    component: <Password placeholder="Contraseña confirmada" />
  }
];

function Register(props) {
  const { getFieldDecorator } = props.form;
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        alert('Campos almacenados: ', values);
      }
    });
  }

  return(
    <Form onSubmit={handleSubmit}>

      {fields.map(item => (
        <Form.Item label={item.label} wrapperCol={{span:12}} labelCol={{span:4}}>
          {getFieldDecorator(item.key, item.options)(
            item.component
          )}
        </Form.Item>
      ))}
      <Form.Item wrapperCol={{offset:4}}>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Guardar
        </Button>
      </Form.Item>

    </Form>
  );

}
export default Form.create()(Register);