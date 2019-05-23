import React from 'react';
import { Modal as ModalAnt, Button , Form, Input,InputNumber} from 'antd';

class Modal extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };


  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Crear
        </Button>
        <ModalAnt
          title="Registro Nuevo "
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <div>
          <div>Nombre : </div>
          <Input  placeholder="Introduce tu Nombre" />
          <br/>
          <div>Edad: </div>
          <InputNumber min={10} max={100} defaultValue={15}  />
          <div>Direccion: </div>
          <Input  placeholder="Introduce tu Direccion" />

          
        </div>

        </ModalAnt>
      </div>
    );
  }
}

export default Modal;
          