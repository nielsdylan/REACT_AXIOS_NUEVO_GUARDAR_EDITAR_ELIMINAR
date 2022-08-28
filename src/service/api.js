import axios from 'axios'

const API_URL="http://127.0.0.1:8000/api/users";

export const addUser = async (data) => {
    try {
        return await axios.post(API_URL,data);
    } catch (error) {
        console.log('No se pudo procesar error addUser',error.message);
    }
}

export const getUser = async () => {
    try {
        return await axios.get(API_URL);
    } catch (error) {
        console.log('No se pudo procesar error al obtener a todos los usuarios',error.message);
    }
}

export const getFindUser = async ($data) => {
    try {
        return await axios.get(API_URL+"/"+$data);
    } catch (error) {
        console.log('No se pudo procesar error obtener al usuario',error.message);
    }
}

export const updateUser = async ($data,$id) => {
    try {
        return await axios.put(API_URL+"/update/"+$id,$data);
    } catch (error) {
        console.log('No se pudo procesar error editar usuario',error.message);
    }
}

export const deleteUser = async ($id) =>{
    try {
        return await axios.delete(API_URL+"/delete/"+$id);
    } catch (error) {
        console.log('No se pudo procesar error eliminar usuario',error.message);
    }
}