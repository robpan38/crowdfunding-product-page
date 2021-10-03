import './successModal.css';
import checkIcon from './images/icon-check.svg';

const SuccessModal = (props) => {
    return (
        <div className="successModalWrapper">
            <div className="successModalInnerWrapper">
                <img className="checkIcon" src={checkIcon} alt="checkIcon"></img>
                <p className="successModalTitle">Thanks for your support!</p>
                <p className="successModalDescription">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
  an email once our campaign is completed.</p>
                <button className="successModalBtn" onClick={props.handleSuccessModal}>Got it!</button>
            </div>
        </div>
    );
}

export default SuccessModal;