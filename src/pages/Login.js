import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Input, Icon, Checkbox, Button, Row, Col } from 'antd';



const Login = ({form, loading, postLogin}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        postLogin(values);
      }
    });
  };

  const { getFieldDecorator } = form;
  return (
    <Row type="flex" justify="center">
      <Col span={8}>
        <Row type="flex" justify="center">
          <h2>Iniciar sesión</h2>
        </Row>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Por favor ingrese nombre de usuario' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Por favor ingresar la contraseña' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
            <Row>
              <Col span={8}>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Recordarme</Checkbox>
                )}
              </Col>
              {/*<Col style={{ float: "right" }}>
                <a className="login-form-forgot" href="">¿Has olvidado tu contraseña?</a>
              </Col>*/}
            </Row>
            <Row>
              <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: "100%" }}>
                Iniciar sesión
                </Button>
            </Row>
            ó <a href="/register">¡Registrarme ahora!</a>
          </Form.Item>
        </Form>
      </Col>
    </Row>

  );
}

const mapState = state => ({
  loading: state.auth.loading
});

const mapDispatch = dispatch => ({
  postLogin: dispatch.auth.authentication
});

export default connect(mapState, mapDispatch)(Form.create()(Login));