import React from 'react';
// import { Table } from 'reactstrap';



const TableCol = (props) => {

  return (
    <tr>
    <th scope="row">{props.Month}</th>
    <td>{props.Percent}</td>
    <td>{props.Total}</td>
    <td>{props.Capture}</td>
</tr>
  );
};

export default TableCol;