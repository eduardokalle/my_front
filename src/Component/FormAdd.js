import React, { useState, useEffect, Fragment } from 'react';
import { Modal as ModalAnt, Button, Form, Input, InputNumber } from 'antd';
import axios from 'axios';

const FormAdd = ({ form, Item}) => {

  const { getFieldDecorator } = form;

  return (
    <Fragment>
      <Item label="Nombre">
        {getFieldDecorator('name', {
          rules: [{ required: true, message: 'Please input the title of collection!' }],
        })(<Input />)}
      </Item>
      <Item label="Edad">
        {getFieldDecorator('old')(<InputNumber min={10} max={100} />)}
      </Item>
      <Item label="Direccion">
        {getFieldDecorator('address', {
          rules: [{ required: true, message: 'Please input the title of collection!' }],
        })(<Input />)}
      </Item>
    </Fragment>
  );
}

export default FormAdd;