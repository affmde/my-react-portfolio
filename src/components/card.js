import { InfoToModal } from "./modalProjectInfo"

export const Card = (props) => {
    return(
        <div className="flip-card-container">
                    <div className="flip-card">
                        <div className="flip-card-front">
                            <img className="card-img" alt={props.title} src={props.image}></img>
                        </div>
                        <div className="flip-card-back">
                            <h3>{props.title}</h3>
                            <p>{props.subtitle}</p>
                            <p>{props.description}</p>
                            <a id="project-btn" href={props.url} target="blank">Go to project</a>
                            <InfoToModal index={props.index}/>
                        </div>
                    </div>
                </div>
    )
}