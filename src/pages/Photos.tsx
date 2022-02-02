import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api";
import { PhotosTypes as Photo } from "../types/PhotosTypes";

export const Photos = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [load, setLoad] = useState(false);
    const [picture, setPicture] = useState<Photo>();

    useEffect(() => {
        if(params.id){
            getPicture(params.id);
        }
    }, [])
    

    const getPicture = async (id:string) => {
        setLoad(true)
        const response = await api.getPhoto(id);
        setPicture(response);
        setLoad(false)
    }

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div>
            {load && "Carregando..."}

            {picture && 
            
                <>
                    <button style={{margin: '5px'}} onClick={handleBack}>Voltar</button>
                    <p style={{margin: '5px'}}>{picture?.title}</p>
                    <img src={picture?.url} alt={picture?.title} />            
                </>
            }
        </div>
    )
}