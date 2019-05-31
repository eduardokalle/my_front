import React, { useState, useEffect} from 'react';
import { Table ,Button} from 'antd';
import Modal from '../Component/Modal';
import Modale from '../Component/Modale';
import axios from 'axios';

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
    // specify the condition of filtering result
    // here is that finding the name started with `value`
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
  /*{
    title: '__v',
    dataIndex: '__v',
    defaultSortOrder: 'descend',
  },*/
  {
    title: '',
    dataIndex: '*',
    render: (text, record) => (
      <span>
        {/*<Button type="primary"  shape="circle" icon="edit" onClick={(e) => Modale}/>*/}
        <Modale type="primary"  shape="circle" icon="edit" id={} />
        <Button type="danger" id='delete'  shape="circle" icon="delete"/>
      </span>
    ),
  },
];

/*const data = [
  {
    key: '1',
    name: '',
    age: '',
    address: '',
  },
  {
    key: '2',
    name: '',
    age: '',
    address: '',
  },
  {
    key: '3',
    name: '',
    age: '',
    address: '',
  },
  {
    key: '4',
    name: '',
    age: '',
    address: '',
  },
];*/

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}


function Crud() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/api/tasks')
    .then((response) => {
      setData(response.data.map(item => {        
        return ({...item, key: item._id})

      }));   
      debugger;   
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  



  return(
    <div>
      <Modal/>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );

}

export default Crud;