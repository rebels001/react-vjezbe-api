import { useState, useEffect } from "react"
import youtube from "../apis/youtube"

const KEY = "AIzaSyDHoQRqWLYOx96SJ_tCXztpkSF8AEyw5Ns"

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        onTermSubmit(defaultSearchTerm)
    }, [defaultSearchTerm]) 
    
    const onTermSubmit = async term => {
        const response = await youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            maxResults: 5,
            key: KEY
          }
        })

        setVideos(response.data.items)
      }

      return [ videos, onTermSubmit ]
}

export default useVideos