import { api } from "../api";
import { useState, useEffect } from 'react';
import { Albumtype } from "../types/AlbumType";
import { AlbumItem } from "../components/AlbumItem";

export const Home = () => {
    const [alb, setAlb] = useState<Albumtype[]>([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        getAlbums();
    }, [])

    const getAlbums = async () => {
        setLoad(true)
        const response = await api.getAllAlbums();
        setAlb(response)
        setLoad(false)
    }



    return (
        <div>
            {load && "Carregado..."}

            {alb.map((item, index) => (
                <AlbumItem key={index} id={item.id} title={item.title}/>
            ))}
        </div>
    )
}