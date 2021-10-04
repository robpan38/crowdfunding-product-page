import { Simulate } from 'react-dom/test-utils';
import './ModalStand.css';

const ModalStand = (props) => {
    return (
        <div className={`modalStandWrapper ${props.activated === true ? "modalStandWrapperActivated" : null}`} style={props.opacity ? {opacity:props.opacity} : {opacity:1}} onClick={props.handleClick}>
            <div className="defaultWrapper">
                <div className={`circle ${props.activated === true ? "circleActivated" : null}`}></div>
                <div className="textWrapper">
                    <div className="titleTextWrapper">
                        <div className="modalStandPledge">
                            <p className="modalStandName">{props.name}</p>
                            <p className="modalStandPrice" style={props.noReward === "1" ? {opacity: "0"} : {}}>Pledge ${props.price} or more</p>
                        </div>
                        <p className="modalStandLeft" style={props.noReward === "1" ? {opacity: "0"} : {}}><span style={{fontWeight:700, fontSize:'max(1.5rem, 1.5vw)', color: 'black'}}>{props.left}</span> left</p>
                    </div>
                    <p className="modalStandDescription">{props.description}</p>
                </div>
            </div>
            <div className={`pledgeWrapper ${props.activated === true ? "pledgeWrapperActivated" : null}`}>
                <p className="label">Enter your pledge</p>
                <div className="amountWrapper">
                    <p className="dollar">$</p>
                    <input type="text"></input>
                    <button onClick={props.handleSuccessModal}>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default ModalStand;