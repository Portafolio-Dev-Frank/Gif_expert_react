import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import  GifGrid  from './components/GifGrid'

const GifExpertApp = () => {

    // const categories = [ 'one puch', 'zamurai', 'goku'];
    const [categories, setCategories] = useState(['one puch'])

    // const handleAdd = () =>{
    //     setCategories(categories => [...categories, 'pepejuan']);
    // }

    return (
        <>
            <h1>Gif expert</h1>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr />
            {/* anadir categoria con setCategories */}
            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category}></GifGrid>
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;