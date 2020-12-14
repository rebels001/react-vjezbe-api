import axios from "axios"

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID cCrGJI2LLZU6jcYsPtCSdH7NQRHKpNffnpfa3mRe6Rg"
    }
})