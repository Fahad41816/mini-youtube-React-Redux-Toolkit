import Axios from "../../utils/Axios"

const getTags = async() => {

    const  tags = await Axios.get("/tags")

    return tags.data

}

export default getTags