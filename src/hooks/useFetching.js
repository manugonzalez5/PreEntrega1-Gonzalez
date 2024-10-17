
import { useEffect, useState } from "react"

// no es un componente
// no es una funcion
// custom hook
export const useFetching = (endpoint) => {

    // puedo usar cosas de react
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const getData = fetch(endpoint)
        getData
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, [endpoint])
    return { data, loading, error }

}

// useFetching() --> datos usuarios
// useFetching() --> datos post
// useFetching() --> datos comments