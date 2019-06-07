import React, { useState, useEffect} from 'react';
import { Table ,Button} from 'antd';
import Modal from '../Component/Modal';
 import Modale from '../Component/Modale';
import axios from 'axios';


function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}


function Crud() {  
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [registro, setRegistro] = useState({});
  useEffect(() => {
    axios.get('http://localhost:4000/api/tasks')
    .then((response) => {
      setData(response.data.map(item => {        
        return ({...item, key: item._id})

      }));   
      // debugger;   
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  const editar = (record) => {
    console.log("record == ", record);
    setVisible(true);    
    setRegistro(record);
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
         <Button type="primary"  shape="circle" icon="edit" onClick={() => editar(record)} />
          {/*<Modale type="primary"  shape="circle" icon="edit" id={"id"} onClick={editar(record)} />*/}
          <Button type="danger" id='delete'  shape="circle" icon="delete"/>
        </span>
      ),
    },
  ];

  return(
    <div>
      <Modal/>
      <Modale title="Edit Task" visible={visible} setVisible={() => setVisible()}  setRegistro={() => setRegistro()} registro={registro} />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );

}

export default Crud;