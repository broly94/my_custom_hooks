import { useState, useEffect, useRef } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null });

    const isMounted = useRef(true);

    useEffect(() => {
        isMounted = false;
    })

    useEffect(() => {

        setState({ data: null, loading: true, error: true })

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if(isMounted) {
                    if (data.length === 0) {
                        setState({
                            author: 'No hay mas quotes',
                            quote: 'error'
                        })
                    } else {
                        setState({
                            loading: false,
                            data,
                            error: null
                        })
                    }
                }
            })
    }, [url])

    return state;

}
