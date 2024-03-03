import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Box, TextField, Button, Typography} from "@mui/material"

function Signin() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email: 'example@gmail.com',
        password: '123abc'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // send signup request
        sendRequest().then(() => navigate("/user")).catch(error => console.log(error))
    }

    const handleChange = (e) => {
        setInputs(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const sendRequest = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/users/signin", {
                ...inputs
            })
            const data = res.data;
            return data;
        } catch (error) {
            throw error;
        }
    }

    const isValidForm = () => {
        return (inputs.email && inputs.email.includes("@")) && (inputs.password && inputs.password.length > 5);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box width={300} display="flex" flexDirection="column" justifyContent="center" alignItems="center" margin="0 auto">
                    <Typography variant="h2">Signin</Typography>
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
                    {isValidForm() ? <Button type="submit" variant="contained">Signin</Button> : <Button type="submit" disabled variant="contained">Signin</Button>}
                </Box>
            </form>
        </div>
    )
}

export default Signin