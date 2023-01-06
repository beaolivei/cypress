import { useEffect, useState } from "react"

const useFetchShows = (show) => {
    const [showData, setShowData] = useState([])
    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${show}`)
        .then((response) => response.json())
        .then((res) => setShowData(res))
    }, [show])
    return showData
}

export default useFetchShows