import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api";
import { PhotoItem } from "../components/PhotoItem";
import { Albumtype } from "../types/AlbumType";
import { PhotosTypes } from "../types/PhotosTypes";


export const Album = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);
    const [photos, setPhotos] = useState<PhotosTypes[]>([]);
    const [albumInfo, setAlbumInfo] = useState<Albumtype>();

    useEffect(() => {
        if(params.id){
            getAllPhotos(params.id);
            getlAlbum(params.id)
        }
    }, [])


    const getAllPhotos = async (id: string) => {
        setLoad(true)
        const response = await api.getPhotosfromAlbum(id);
        setPhotos(response)
        setLoad(false)
    }

    const getlAlbum =async (id: string) => {
        const response = await api.getAlbum(id);
        setAlbumInfo(response)
    }

    const handleBack = () => {
        navigate('/');
    }

    return (
        <div>
            <button style={{margin: '5px'}} onClick={handleBack}>voltar</button>

            {load && "Carregando..."}
            <h2 style={{margin: '5px'}}>{albumInfo?.title}</h2>
            
            {photos.map((item, index) => (
                <PhotoItem key={index} data={item} />
            ))}
            
        </div>
    )
}