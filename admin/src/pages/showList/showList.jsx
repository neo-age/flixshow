import "./showList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovies, getMovies } from "../../context/movieContext/ApiCalls";

export default function ShowList() {
  const {movie, dispatch} = useContext(MovieContext)

  useEffect(()=>{
    getMovies(dispatch)
    console.log(dispatch)
  },[dispatch])

  console.log(movie)

  const handleDelete = (id) => {
    console.log(id)
    deleteMovies(id, dispatch)
  };
  
  
  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    {
      field: "show",
      headerName: "Show",
      flex: 1 ,
      renderCell: (params) => {
        return (
          <div className="showListItem">
            <img className="showListImg" src={params.row.imgsm} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", flex: 1 },
    { field: "year", headerName: "Year", flex: 1 },
    { field: "agelimit", headerName: "Limit", flex: 1 },
    { field: "type", headerName: "Type", flex: 1 },


    {
      field: "action",
      headerName: "Action",
      flex: 1 ,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/show/" + params.row._id} state={params.row}>
              <button className="showListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="showListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  

  return (
    <div className="showList">
      <DataGrid 
        rows={movie} 
        disableSelectionOnClick
        columns={columns} 
        pageSize={10} 
        checkboxSelection
        getRowId={r=> r._id}
      />
    </div>
  );
}
