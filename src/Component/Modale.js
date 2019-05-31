import React from 'react';
import { Modal as ModalAnt, Button , Form, Input,InputNumber} from 'antd';
import axios from 'axios';

class Modale extends React.Component {
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
    const id = this.props.id;
    axios.put(`http://localhost:4000/api/tasks/${id}`)
    .then((response) => {
      setData(response.data.map(item => {        
        return ({...item, key: item._id})

      }));   
      debugger;   
    })
    .catch((error) => {
      console.log(error);
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
        <Button type="primary"  shape="circle" icon="edit" id= 'edite' onClick={this.showModal}>
        </Button>
        <ModalAnt
          title="Editar Registro "
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

export default Modale;
          