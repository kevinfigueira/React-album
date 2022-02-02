import { Link } from "react-router-dom";
import './styles.css'


type Props = {
    id: number,
    title: string;
}

export const AlbumItem = ( {id, title }: Props) => {
    return (
        <Link className="albums" to={`/albums/${id}`} >
            {title}
        </Link>
    )
}