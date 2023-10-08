import Axios from "../../utils/Axios"

const getVideo = async(tags, search) => {

    console.log(tags)

    let queryString = '';

    if(tags?.length > 0){        
        queryString += tags.map(tag => `tags_like=${tag}`).join("&")
    }

    if(search !== ""){
        queryString += `&q=${search}`
    }

    


    const  videos = await Axios.get(`/videos?${queryString}`)

    return videos.data

}

export default getVideo