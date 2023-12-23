import {
    useState,
    useEffect
} from "react";
import axios from "axios";

export const useFetch = (url, method, purpose) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setIsPending(true)

            try {
                let response;
                response = await axios({
                    method: method,
                    url: url,
                });

                setIsPending(false)
                if (purpose === "codes") {
                    setData(response.data.message.arraySelectedData);
                } else {
                    setData(response)
                }

                setError(null)
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("the fetch was aborted");
                } else {
                    setIsPending(false)
                    setError('Could not fetch the data');
                }
            }
        }

        fetchData()
        return () => {
            controller.abort()
        }

    }, [url, method, purpose])

    return {
        data,
        isPending,
        error
    }
}