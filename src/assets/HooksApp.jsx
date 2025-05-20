import { useEffect, useState } from "react"

export const UsersApp = () => {

    const [users, setUsers] = useState([])

    const fetchUsers = async() => {
        try{
            const response = await fetch ('https://jsonplaceholder.typicode.com/users')
            const data = response.json()
            console.log(data)
            setUsers(data)
        }catch(error){
            console.error(error)
        }
    }

    useEffect( () => {
        fetchUsers()
    }, [])

    return(
        <>
        <h1>Lista de usuarios:</h1>
        <ul>
            <li>Tomas Calderaro</li>  
            <li>Eduardo Arguello</li>
            <li>Macarena Olmedo</li>  
        </ul>
        </>
    )
}