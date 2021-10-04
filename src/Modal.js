import './Modal.css';
import ModalStand from './ModalStand';
import xIcon from './images/icon-close-modal.svg';
import { useState } from 'react';

const Modal = (props) => {
    const [noRewardActivated, setNoRewardActivated] = useState(false);
    const [bambooActivated, setBambooActivated] = useState(false);
    const [blackActivated, setBlackActivated] = useState(false);
    
    const handleNoRewardClick = () => {
        setNoRewardActivated(true);
        setBambooActivated(false);
        setBlackActivated(false);
    }

    const handleBambooClick = () => {
        setBambooActivated(true);
        setNoRewardActivated(false);
        setBlackActivated(false);
    }

    const handleBlackClick = () => {
        setBlackActivated(true);
        setBambooActivated(false);
        setNoRewardActivated(false);
    }

    return (
        <div className="modalWrapper">
            <div className="modalInnerWrapper">
                <div className="modalTitleWrapper">
                    <p>Back this project</p>
                    <img className="xIcon" src={xIcon} onClick={props.handleModal}></img>
                </div>
                <p className="modalDescription">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                <ModalStand name="Pledge with no reward" description="Choose to support us without a reward if you simply believe in our project. As a backer, 
  you will be signed up to receive product updates via email." noReward="1" handleClick={handleNoRewardClick} activated={noRewardActivated} handleSuccessModal={props.handleSuccessModal}></ModalStand>
                <ModalStand name="Bamboo Stand" price="25" left={props.bambooStandCount} description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
  you’ll be added to a special Backer member list." handleClick={handleBambooClick} activated={bambooActivated} handleSuccessModal={props.handleSuccessModal}></ModalStand>
                <ModalStand name="Black Edition Stand" price="75" left={props.blackEditionCount} description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
  member list. Shipping is included." handleClick={handleBlackClick} activated={blackActivated} handleSuccessModal={props.handleSuccessModal}></ModalStand>
                <ModalStand name="Mahogany Special Edition" price="200" left="0" description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
  to our Backer member list. Shipping is included." opacity="0.6"></ModalStand>
            </div>
        </div>
    );
}

export default Modal;