import { useState, useEffect } from "react";
import { User, UserResult } from "../types/userResult";
import axios from "axios";

const useUserAPI = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUser = async () => {
        setLoading(true);
        setError(null); 
        
        try {
            const response = await axios.get<UserResult>("https://randomuser.me/api/");
            const newUser = response.data.results[0];
    
            setUsers((prevUsers) => [...prevUsers, newUser]); 
            setCurrentUser(newUser);
            setLoading(false);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
        };
    
    useEffect(() => {
        fetchUser(); 
      }, []);

    return { currentUser, users, loading, error, fetchUser };
}

export default useUserAPI;