import { Table, TableHead, TableRow, TableCell, TableBody, styled, Button, TableContainer, Paper, Box, Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { useEffect, useState } from "react";
import { getUser, deleteUser } from "../service/api";
import { Link } from "react-router-dom";

const Thead = styled(TableRow)`
    background: #000;
    &>th{
        color: #fff;
        text-size: 20px;
    }

`;

const AllUser = () => {

    // almacenamos la data que traemos de la base de datos en un hook setUser
    const [users, setUser] = useState([]);

    useEffect(() => {
        getUsersDetalls();
        // return () => {
        //     cleanup
        // };
    }, []);

    // function para traer la lista de usuarios de la base de datos
    const getUsersDetalls = async () =>{
        let response = await getUser();
        setUser(response.data.data);
    }
    const deleteUsers = async (id) =>{
        await deleteUser(id);
        getUsersDetalls();
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid item md={3}></Grid>
                <Grid item md={6}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <Thead>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>User Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell>ACCIONES</TableCell>
                                </Thead>
                            </TableHead>
                            <TableBody>
                                {
                                    users.map((user)=>(
                                        <TableRow key={user.user_id}>
                                            <TableCell>{user.user_id}</TableCell>
                                            <TableCell>{user.name}</TableCell>
                                            <TableCell>{user.user_name}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>{user.telephone}</TableCell>
                                            <TableCell>
                                                <Button variant="contained" color="error" style={{marginRight: 10}} startIcon={<DeleteIcon />} onClick={()=>deleteUsers(user.user_id)} >
                                                    Delete
                                                </Button>
                                                <Button variant="contained" color="warning" startIcon={<EditIcon />} component={Link} to={"/edit/"+user.user_id}>
                                                    Edit
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

            </Grid>
        </Box>

     );
}
 
export default AllUser;