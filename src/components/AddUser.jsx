import { FormGroup, FormControl, InputLabel, Input, Typography, Button,  Box, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// importar el servicio para la api
import {addUser} from "../service/api";

// const Formgroup =styled(FormGroup)`
//     width: 50%;
//     margin: 5% auto 0;
// `;
const initialValues ={
    name:"",
    user_name:"",
    email:"",
    phone:""
}

const AddUser = () => {

    const [user, setUser] = useState(initialValues);
    // para redireccionar despuesd e una accion
    const navigate = useNavigate();

    // function para agregar los valores a un objeto usando la funcion onchange
    const onValueChange = (e) =>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    // ------
    // function de agregar al nuevo usuario despues de ponerlo en un objeto
    const addUserDetalls = async ()=>{
        await addUser(user);
        navigate("/all");
    }
    // -----------------------------

    return ( 
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid item md={4}></Grid>
                <Grid item md={4}>
                    <FormGroup>
                        <Typography variant="h4" >Add User</Typography>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="name">Name</InputLabel>
                            <Input name="name" id="name" aria-describedby="my-helper-text" onChange={(e)=> onValueChange(e)} />
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="user-name">User Name</InputLabel>
                            <Input name="user_name" id="user-name" aria-describedby="my-helper-text" onChange={(e)=> onValueChange(e)} />
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input name="email" id="email" aria-describedby="my-helper-email" onChange={(e)=> onValueChange(e)} />
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="phone">Phone</InputLabel>
                            <Input name="phone" id="phone" aria-describedby="my-helper-number" onChange={(e)=> onValueChange(e)} />
                        </FormControl>
                        <FormControl variant="standard">
                            <Button variant="contained" onClick={()=>addUserDetalls()} >Add user</Button>
                        </FormControl>
                    </FormGroup>
                </Grid>
                <Grid item md={4}></Grid>
            </Grid>

        </Box>

     );
}
 
export default AddUser;