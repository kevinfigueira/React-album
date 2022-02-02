import { Link } from "react-router-dom";
import { PhotosTypes } from "../types/PhotosTypes";
import './styles.css';

type Props = {
    data: PhotosTypes
}

export const PhotoItem = ( { data }: Props) => {
    return (
        <Link className="photo" to={`/photos/${data.id}`}>
            <img src={data.thumbnailUrl} alt={data.title} />
        </Link>
    )
}