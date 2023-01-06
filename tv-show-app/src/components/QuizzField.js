import {useState} from 'react'
import useFetchShows from '../hooks/useFetchShows'
import ShowComponent from './ShowComponent'

const QuizzField = () => {
    const [show, setShow] = useState(null)
    
    const handleSubmit = (event) => { 
        event.preventDefault()
        setShow(event.target.searchInput.value)
    }
    const showData = useFetchShows(show)
    return(
        <div>
            <p> In this app you can get information from your favorite show.
                Use to search to get show information
            </p>
            { !show ? 
            <form onSubmit={handleSubmit}>
            <input name='searchInput'/>
            <button type="submit"> Submit</button>
        </form> : 
        <ShowComponent show={show} showData={showData} setShow={setShow}/>
            }

        </div>
    )
}
export default QuizzField