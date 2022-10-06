import "./ListOfShows.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { deleteLists, getLists } from "../../context/listContext/ApiCallls";

export default function Listofshows() {
  const {list, dispatch} = useContext(ListContext)

  useEffect(()=>{
    getLists(dispatch)
  },[dispatch])

  const handleDelete = (id) => {
    console.log(id)
    deleteLists(id, dispatch)
  };
  
  
  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    { field: "title", headerName: "title", flex: 1 },
    { field: "genre", headerName: "Genre", flex: 1 },
    { field: "type", headerName: "Type", flex: 1 },


    {
      field: "action",
      headerName: "Action",
      flex: 1 ,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/list/" + params.row._id} state={params.row}>
              <button className="listofshowsEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="listofshowsDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  

  return (
    <div className="listofshows">
      <DataGrid 
        rows={list} 
        disableSelectionOnClick
        columns={columns} 
        pageSize={10} 
        checkboxSelection
        getRowId={r=> r._id}
      />
    </div>
  );
}
