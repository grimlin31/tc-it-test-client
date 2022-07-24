import axios from "axios"

const URL = 'http://localhost:4000/posts'

const getAllPostService = async () => {
    const {data} = await axios.get(URL)
    return data
}

const createPostService = async (data) => {
    const response = await axios.post(URL, data)
    return response.data
}

const deletePostService = async (id) => {
    const response = await axios.delete(`${URL}/${id}`);
    return response.data;
}

export {
    getAllPostService,
    createPostService,
    deletePostService
}