import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Box, TextField, Button, Typography} from "@mui/material"

function Signup() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // send signup request
        sendRequest().then(() => navigate("/signin")).catch(error => console.log(error))
    }

    const handleChange = (e) => {
        setInputs(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const sendRequest = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/users/signup", {
                ...inputs
            })
            const data = res.data;
            return data;
        } catch (error) {
            throw error;
        }
    }

    const isValidForm = () => {
        return (inputs.name && inputs.name.length > 5) && (inputs.email && inputs.email.includes("@")) && (inputs.password && inputs.password.length > 5);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box width={300} display="flex" flexDirection="column" justifyContent="center" alignItems="center" margin="0 auto">
                    <Typography variant="h2">Signup</Typography>
                    <TextField
                        type="text"
                        name="name" 
                        label="Name" 
                        value={inputs.name} 
                        variant="outlined" 
                        placeholder="Name" 
                        margin="normal"
                        onChange={handleChange}
                        />
                    <TextField 
                        type="email"
                        name="email" 
                        label="Email" 
                        value={inputs.email} 
                        variant="outlined" 
                        placeholder="Email" 
                        margin="normal"
                        onChange={handleChange}
                        />
                    <TextField 
                        type="password"
                        name="password" 
                        label="Password" 
                        value={inputs.password} 
                        variant="outlined" 
                        placeholder="Password" 
                        margin="normal"
                        onChange={handleChange}
                    />
                    {isValidForm() ? <Button type="submit" variant="contained">Signup</Button> : <Button type="submit" disabled variant="contained">Signup</Button>}
                </Box>
            </form>
        </div>
    )
}

export default Signup