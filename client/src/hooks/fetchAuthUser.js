import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/loginSlice";

export const useFetchAuthUser = () => {
  const dispatch = useDispatch();
  const [Author, setAuthor] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const authUser = async () => {
      try {
        const token = localStorage.getItem('ACCESS_TOKEN');
        if (!token) {
          throw new Error('No token found');
        }
        
        axios.defaults.withCredentials = true;
        const response = await axios.get("http://localhost:4000/profile");
        
        if (response && response.data) {
          dispatch(login(response.data));
          setAuthor(response.data);
        } else {
          console.log("not work");
        }
      } catch (error) {
        console.error("Error fetching authUser:", error);
        setError(error.message);
      }
    };

    authUser();
  }, [dispatch]);

  return { Author, error };
};
