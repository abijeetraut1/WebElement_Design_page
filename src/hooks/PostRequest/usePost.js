import {
    useState,
    useEffect
} from "react";
import axios from "axios";

export const usePost = (url, data) => {
    const [status, setStatus] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const postData = async () => {
            try {
                setStatus(true); 
                
                const postData = await axios({
                    method: "POST",
                    url: url,
                    headers: {
                        'Content-Type': "multipart/form-data"
                    },
                    data: data
                })

                console.log(postData)
                setResponse(postData);
            } catch(err){
                setError(err.message);
            }
            
        }

        postData();
        return () => {
            controller.abort();
        }
    }, [url, data]);

    return {
        status, error, response
    }
}