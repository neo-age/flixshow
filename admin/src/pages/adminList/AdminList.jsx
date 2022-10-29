import "./adminList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { UserContext } from "../../context/userContext/UserContext";
import { deleteUsers, getUsers } from "../../context/userContext/ApiCalls";

export default function AdminList() {
  const {user, dispatch} = useContext(UserContext)

  useEffect(()=>{
    const user = "admins"
    getUsers(dispatch, user)
  },[dispatch])

  const handleDelete = (id) => {
    const user = "admins"
    deleteUsers(id, dispatch, user)
  };
  
  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    {
      field: "user",
      headerName: "User",
      flex: 1 ,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.profilepic} alt="" />
            {console.log(params.row)}
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id} state={params.row}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={user} 
        disableSelectionOnClick
        columns={columns} 
        pageSize={10} 
        checkboxSelection
        getRowId={r=> r._id}
      />
    </div>
  );
}
