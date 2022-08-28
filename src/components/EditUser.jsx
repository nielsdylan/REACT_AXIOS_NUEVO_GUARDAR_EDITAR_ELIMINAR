import { FormGroup, FormControl, InputLabel, Input, Typography, Button,  Box, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// importar el servicio para la api
import { updateUser, getFindUser} from "../service/api";

// const Formgroup =styled(FormGroup)`
//     width: 50%;
//     margin: 5% auto 0;
// `;
const initialValues ={
    name:"",
    user_name:"",
    email:"",
    telephone:""
}

const EditUser = () => {

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
        await updateUser(user,id);
        console.log(user);
        navigate("/all");
    }
    // -----------------------------

    // obtener el usuario
    const { id } = useParams();
    useEffect(() => {
        getUserData();
    },[]);

    const getUserData = async () =>{
        let response = await getFindUser(id);
        setUser(response.data.data);
    }

    return ( 
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid item md={4}></Grid>
                <Grid item md={4}>
                    <FormGroup>
                        <Typography variant="h4" >Add User</Typography>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="name">Name</InputLabel>
                            <Input name="name" id="name" aria-describedby="my-helper-text" onChange={(e)=> onValueChange(e)} value={user.name} />
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="user-name">User Name</InputLabel>
                            <Input name="user_name" id="user-name" aria-describedby="my-helper-text" onChange={(e)=> onValueChange(e)} value={user.user_name} />
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input name="email" id="email" aria-describedby="my-helper-email" onChange={(e)=> onValueChange(e)} value={user.email} />
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="phone">Phone</InputLabel>
                            <Input name="telephone" id="phone" aria-describedby="my-helper-number" onChange={(e)=> onValueChange(e)} value={user.telephone} />
                        </FormControl>
                        <FormControl variant="standard">
                            <Button variant="contained" onClick={()=>addUserDetalls()} >Edit user</Button>
                        </FormControl>
                    </FormGroup>
                </Grid>
                <Grid item md={4}></Grid>
            </Grid>

        </Box>

     );
}
 
export default EditUser;