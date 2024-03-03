import { AppBar, Tab, Tabs, Toolbar, Typography, Box } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom";

function Header() {
    const [value, setValue] = useState();
  
    return (
        <div>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h3">Auth Front End</Typography>
                    <Box sx={{marginLeft: "auto"}}>
                        <Tabs 
                            indicatorColor="secondary" 
                            onChange={(e, val) => setValue(val)} 
                            value={value} 
                            textColor="inherit"
                        >
                            <Tab LinkComponent={Link} to="/signin" label="Signin" />
                            <Tab LinkComponent={Link} to="/signup" label="Signup" />
                        </Tabs>
                    </Box>
                </Toolbar> 
            </AppBar>
        </div>
    )
}

export default Header