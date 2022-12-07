import axios from "axios"


const apiUrl = "https://mathlets-backend.vercel.app"

async function youtubeApi() {
  try {
    return await axios.get(apiUrl + "/youtube").then((result) => {
      return result
    })
  } catch (err) {
    console.log(err);
  }
}

export default youtubeApi


