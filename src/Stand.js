import './Stand.css';

const Stand = (props) => {
    return (
        <div className="standWrapper" style={props.opacity ? {opacity:props.opacity} : {opacity:1}}>
            <div className="standName">
                <p className="name">{props.standName}</p>
                <p className="pledge">Pledge ${props.standAmount} or more</p>
            </div>
            <p className="standDescription">
                {props.standDescription}
            </p>
            <div className="standInfo">
                <div className="standCountWrapper">
                    <p className="count">{props.standCount}</p>
                    <p className="left">left</p>
                </div>
                <button className="selectBtn" onClick={props.handleModal} style={props.opacity ? {backgroundColor: "var(--darkGray)", borderColor: "var(--darkGray)"} : {}}>Select Reward</button>
            </div>
        </div>
    );
}

export default Stand;