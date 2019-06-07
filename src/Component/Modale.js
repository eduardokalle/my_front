import React, { useState } from 'react';
import { Modal as ModalAnt, Button , Form, Input,InputNumber} from 'antd';
import axios from 'axios';

function Modale ({ title, setVisible, setRegistro, visible, registro }) { 

  /*const showModal = () => {
    setVisible(true);
  };*/
  console.log('registro == ', registro);
  const handleOk = e => {
    console.log(e);
    // setVisible(false);
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
        onOk={handleOk}
        onCancel={handleCancel}
      >
      <div>
        <div>Nombre : </div>
        <Input placeholder="Introduce tu Nombre" value={registro ? registro.name : ""} />
        <br/>
        <div>Edad: </div>
        <InputNumber min={10} max={100} value={registro ? registro.old : 0}  />
        <div>Direccion: </div>
        <Input placeholder="Introduce tu Direccion" value={registro ? registro.address : ""} />
      </div>

      </ModalAnt>
    </div>
  );
}

export default Modale;
          