import Axios from "../../utils/Axios"

 

const getPlayVideo = async(id) => {
    
    const PlayVideo = await Axios.get(`videos/${id}`)
    return PlayVideo.data

}

export default getPlayVideo