import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GIfGridItem } from './GIfGridItem';

const GifGrid = ({ category }) => {


    // const [images, setimages] = useState([])
    const { data, loading } = useFetchGifs(category);



    return (
        <>
            <h3>{category}</h3>

            {loading ? 'cargando' : '...carga completa'}

            <div className="card-grid">

                {
                    data.map(img => (
                        <GIfGridItem
                            key={img.id}
                            {...img} />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid