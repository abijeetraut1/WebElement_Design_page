import { useState, useEffect } from "react";
import axios from "axios";

export const useGetFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setIsPending(true)

            try {
                const code = await axios({
                    method: "GET",
                    url: url,
                });
                console.log(code.data.items);
                setIsPending(false)
                setData(code.data.items)
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

    }, [url])

    return {
        data,
        isPending,
        error
    }
}