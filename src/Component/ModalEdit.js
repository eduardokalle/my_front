import React, { useState } from 'react';
import { Modal as ModalAnt, Button , Form, Input,InputNumber} from 'antd';
import axios from 'axios';

function ModalEdit ({ title, setVisible, setRegistro, visible, registro, dataList, ...props}) { 

  const form = props.form;

  const [ setData ] = useState([]);

  console.log('registro == ', registro);


  const handleSubmit = e => {

    e.preventDefault();
    props.form.validateFields(( values) => {
   
    axios.put('http://localhost:4000/api/tasks', {...values, old: (values.old).toString()})
    .then((response) => {
      dataList.push({ ...response.data.task, key: response.data.task._id  });
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
    setRegistro({});
  };

  return (
    <div>      
      <ModalAnt
        title={title}
        visible={visible}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <Form layout="vertical" form={form} Item={Form.Item}>
        
      <div>
        <div>Nombre : </div>
        <Input placeholder="Introduce tu Nombre" value={registro ? registro.name : ""} />
        <br/>
        <div>Edad: </div>
        <InputNumber min={10} max={100} value={registro ? registro.old : 0}  />
        <div>Direccion: </div>
        <Input placeholder="Introduce tu Direccion" value={registro ? registro.address : ""} />
      </div>

      </Form>
      

      </ModalAnt>
    </div>
  );
}

export default ModalEdit;
          