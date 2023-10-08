import Axios from "../../utils/Axios"

 

const getRelatedVideo = async(tags, id) => {
    
 

    const limit = 5;

    let queryString = tags.length > 0 ? tags.map(tag => `tags_like=${tag}`) .join('&') + `&id_ne=${id}&limit=${limit}` : `&id_ne=${id}&limit=${limit}`
    
    const Video = await Axios.get(`videos?${queryString}`)
    
    
    return Video.data

}

export default getRelatedVideo