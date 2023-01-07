const ShowComponent = (props) => {
    return(
        <div>
        <p> You are searching for: {props.show}
        </p>
        <p> Here some info on it: </p>
                <img data-test-id="showImage" src={props.showData[0]?.show.image.medium}/>
               <p>Show Premiered in: {props.showData[0]?.show.premiered}</p> 
                <p>The show rating is {props.showData[0]?.show.rating.average}</p>
            <p> Or did you actually mean: </p>
            <ul>
                {
                    props.showData?.map((el) => (
                        <li key={el.show.id}>
                        <button onClick={(event) => props.setShow(event.target.innerHTML)}>
                        {el.show.name}
                        </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default ShowComponent