import React from 'react'
import { Form, Input, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Alert } from 'antd';

const { Password, setData, dataup, ...props } = Input;

const form = props.form;

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
    key: 'email',
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
    key: 'pass',
    label: 'Contraseña',
    options: {
        rules: [{ required: true, message: 'Please input your password!' }],
      },
    component: <Password placeholder="Contraseña" />
  }
];

function Register(props) {
  const { getFieldDecorator } = props.form;
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {if (!err) {
      axios.post('http://localhost:4000/api/users/signup', { ...values })
      .then((response) => {
        /* dataup.push({ ...response.data.user});
        setData(dataup);
        ({
          name: values.name,
          email: values.mail,
          pass: values.password
        })*/
        alert("Registrado");
        props.history.push("/");
      console.log(e);
    })
    .catch((error) => {
      console.log(error);
    });
    }
  });
};

  return(
    <Form onSubmit={handleSubmit} form={form} Item={Form.Item}>

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
export default withRouter(Form.create()(Register));