import {useEffect, useRef} from "react"
import { useForm } from "../hooks/useForm"

export const FormularioComponent = () => {
        
        const focusRef = useRef()

        console.log(focusRef)
    
        const initialForm = {
            userName: '',
            email: '',
            password: ''
        }
        const { formState, userName, email, password, onInputChange } =useForm(initialForm)

        const onSubmit = (event) => {
            event.preventDefault()
            console.log(formState)
        }

        useEffect(() => {
            
            first 

            return () => {
                second
            }
            }, [third])

        return
        <form onSubmit={onSubmit} >
            <div className="form-group">
                <label htmlFor="userName">User name</label>
                <input
                        type="text"
                        className="form-control"
                        name="userName"
                        placeholder="Enter your UserName"
                        value={userName}
                        onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                        ref= {focusRef}
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                        type="text"
                        className="form-control"
                        name="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={onInputChange}
                />
            </div>
            }