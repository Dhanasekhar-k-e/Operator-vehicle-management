import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'
import axios from 'axios';

const Home = () => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4001/vehicles/')
    .then(res => {
      setVehicles(res.data);
    })
    .catch(e => console.log(e));
  });
  const columns = [
    {
      Header: 'No',
      accessor: 'no',
      filterable: true,
      sortable: true,
    },
    {
      Header: 'Description',
      accessor: 'description',
    },
    {
      Header: 'Type',
      accessor: 'type',
      Cell: props => <span className='type'>{props.value == 0 ? 'Car' : props.value == 1 ? 'Van' : 'Bus'}</span>,
      filterable: true,
      Filter: props => <select>
        <option value="Car">Car</option>
        <option value="Van">Van</option>
        <option value="Bus">Bus</option>
      </select>
    },
    {
      Header: 'Capacity',
      accessor: 'capacity',
      sortable: true,
    },
    {
      Header: 'Trips Count',
      accessor: 'trips_count',
      sortable: true
    }
  ];
  return (
    <div>
      <ReactTable
        style={{marginTop: 100}}
        title="Vehicle List"
        columns={columns}
        data={vehicles}
        pageSize={5}
        defaultPageSize={5}
        sortable={false}
      />
    </div>
  );
}

export default Home;