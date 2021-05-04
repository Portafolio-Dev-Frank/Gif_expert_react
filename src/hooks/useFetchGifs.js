
// ==================================
// todos los hooks son funciones,
// por estandar el name del archivo comienza con use
// ==================================

import { useEffect, useState } from "react"
import { getGifs } from "../enviroments/GetGifs";


export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    /**
     * Hook para ejecutarse una sola vez
     */
    useEffect(() => {
        getGifs(category).then(images => {
                console.log(images);
                setstate({
                    data: images,
                    loading: false
                })
        });
    }, [category])

    return state;
}