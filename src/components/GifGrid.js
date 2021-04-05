import React from 'react';
import { useFetchGifs } from '../hooks/useFecthGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    /*const [images, setImages] = useState([])


    // If the category changes, useEffect is called again.

    useEffect(() => {
        getGifs(category)
            .then( imgs => {
                setImages(imgs);
            })
    }, [ category ]);*/

    const { data: images, loading } = useFetchGifs(category);

    

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p> }
            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GifGridItem 
                            { ...img }
                            key={img.id}
                        />
                    ))
                }

            </div>
        </>
    )
}
