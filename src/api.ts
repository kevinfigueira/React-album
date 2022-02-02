import axios from "axios";

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api =  {
    getAllAlbums: async () => {
        const req = await http.get('/albums');
        return req.data;
    },
    
    getAlbum: async (id: string) => {
        const req = await http.get(`/albums/${id}`);
        return req.data;
    },
    
    getPhotosfromAlbum: async (id: string) => {
        const req = await http.get(`/albums/${id}/photos`);
        return req.data;
    },

    getPhoto: async (id: string) => {
        const req = await http.get(`/photos/${id}`);
        return req.data;
    }
}