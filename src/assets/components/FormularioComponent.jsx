import { useForm } from "../hooks/useForm"

export const FormularioComponent = () => {
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

        return
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="userName">User name</label>
                <input type="text"
                       className="form-control"
                       name="userName"
                       placeholder="Enter your UserName"
                       value={userName}
                       onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text"
                       className="form-control"
                       name="email"
                       placeholder="Enter your Email"
                       value={email}
                       onChange={onInputChange}
             </div>

        </form>
        
}