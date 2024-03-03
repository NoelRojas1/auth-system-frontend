import axios from "axios";
import { useState, useEffect } from "react";

function Welcome() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/users/me", {
                    withCredentials: true
                });
                const data = response.data;
                console.log('user',data.user)
                setUser(data.user);
            } catch (error) {
                console.log(error)
            }
        };

        getUser();
    }, []);

    return (
        <div>
            {user && <p>Welcome {user.name}</p>}
        </div>
    )
}

export default Welcome