import React from 'react'
import DataTable from "react-data-table-component";
import datatable from './json/datatable';
const Datatablecomponent = () => {
    const columns = [
        {
          id: 1,
          name: "Title",
          selector: (row) => row.title,
          sortable: true,
          reorder: true
        },
        {
          id: 2,
          name: "Director",
          selector: (row) => row.director,
          sortable: true,
          reorder: true
        },
        {
          id: 3,
          name: "Runtime (m)",
          selector: (row) => row.runtime,
          sortable: true,
          right: true,
          reorder: true
        }
      ];
  return (
    <div className='container mt-5 p-5'>
      <DataTable
          title="Movies"
          columns={columns}
          data={datatable}
          defaultSortFieldId={1}
        //   sortIcon={<SortIcon />}
          pagination
          selectableRows
        />
    </div>
  )
}

export default Datatablecomponent
