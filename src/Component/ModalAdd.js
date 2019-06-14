import React, { useState, useEffect } from 'react';
import { Modal as ModalAnt, Button, Form, Input, InputNumber } from 'antd';
import axios from 'axios';
import FormEdit from './FormEdit';

function ModalAdd({ title, setVisibleAdd, visible, ...props }) {
  
  const [ setData ] = useState([]);

  console.log('visible == ', visible);
  

  const handleOk = event => {
    event.preventDefault();

    axios.post('http://localhost:4000/api/tasks')
    .then((response) => {
      setData(response.data.map(item => {        
        return ({...item, key: item._id})

      }));   
      // debugger;   
    })
    .catch((error) => {
      console.log(error);
    });
  }



  const handleCancel = e => {
    console.log(e);
    setVisibleAdd(false);

  };

  return (
    <ModalAnt
      title={title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <FormEdit />
    </ModalAnt>    
  );
}

export default ModalAdd;
