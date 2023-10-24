import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url, section) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setIsPending(true)

            try {
                console.log(section)
                const code = await axios({
                    method: "POST",
                    url: url,
                    data: {section : "body"}
                });
                setIsPending(false)
                setData(code.data.message.selectDataQuery)
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

    }, [url, section])

    return {
        data,
        isPending,
        error
    }
}