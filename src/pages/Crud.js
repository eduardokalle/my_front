import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import ModalAdd from '../Component/ModalAdd';
import Modale from '../Component/ModalEdit';
import axios from 'axios';
import FormEdit from '../Component/FormEdit';
import { Popconfirm, message } from 'antd';
import ModalEdit from '../Component/ModalEdit';


function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}


function Crud() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [registro, setRegistro] = useState({});
  const [title, setTitle] = useState("");
  const [visibleAdd, setVisibleAdd] = useState(false);

  useEffect(() => {
    list();
  }, []);

  const list = () => {
    axios.get('http://localhost:4000/api/tasks')
      .then((response) => {
        setData(response.data.map(item => {
          return ({ ...item, key: item._id })

        }));
        // debugger;   
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const editar = (record) => {
    console.log("record == ", record);
    setVisible(true);
    setRegistro(record);
    setTitle("Editar Usuario");

  }

  const agregar = () => {
    setVisibleAdd(true);
    setTitle("Nuevo Usuario");

    axios.post('http://localhost:4000/api/tasks')
      .then((response) => {
        setData(response.data.map(item => {
          return ({ ...item, key: item._id })

        }));
        // debugger;   
      })
      .catch((error) => {
        console.log(error);
      });

  }

  const eliminar = (record) => {
    axios.delete('http://localhost:4000/api/tasks/${_id}')
      .then((response) => {
        // setData(response.data.map(item => {             
        //   return ({...item, key: item._id})
        // }));   
        list();
        // debugger;   
      })
      .catch((error) => {
        console.log(error);
      });

  }

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      filters: [
        {
          text: '',
          value: '',
        },
        {
          text: '',
          value: '',
        },
        {
          text: 'Apellido',
          value: 'Last name',
          children: [
            {
              text: '',
              value: '',
            },
            {
              text: '',
              value: '',
            },
          ],
        },
      ],

      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Edad',
      dataIndex: 'old',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.old - b.old,
    },
    {
      title: 'Direccion',
      dataIndex: 'address',
      filters: [
        {
          text: '',
          value: '',
        },
        {
          text: '',
          value: '',
        },
      ],

      filterMultiple: false,
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: '',
      dataIndex: '*',
      render: (text, record) => (
        <span>
          <Button type="primary" shape="circle" icon="edit" onClick={() => editar(record)} />
          {/*<Modale type="primary"  shape="circle" icon="edit" id={"id"} onClick={editar(record)} />*/}
          <Popconfirm
            title="Estas seguro de elimninar este registro ?"
            onConfirm={() => eliminar(record)}
            okText="Si"
            cancelText="No"
          >
          <Button type="danger" id='delete' shape="circle" icon="delete" />
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div>
      <ModalEdit title={title} visible={visible} setVisible={() => setVisible()} setRegistro={() => setRegistro()} registro={registro} />
      <ModalAdd title={title} visible={visibleAdd} setVisibleAdd={() => setVisibleAdd()}  onOk={agregar} />
      <Button type="primary" shape="SQUARE" icon="save" onClick={() => agregar() }  onOk={agregar} >Agregar Nuevo</Button>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );

}

export default Crud;