import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Title from './Title';
import ProgressBar from './progressBar';
import StandContainer from './StandContainer';
import Modal from './Modal';
import { useState } from 'react';
import SuccessModal from './successModal';

function App() {
  const [modalStatus, setModalStatus] = useState(false);
  const [successModalStatus, setSuccessModalStatus] = useState(false);

  const [amount, setAmount] = useState(89914);
  const [backers, setBackers] = useState(5007);
  const [bambooStandCount, setBambooStandCount] = useState(101);
  const [blackEditionCount, setBlackEditionCount] = useState(64);

  const handleSuccessModalStatusClick = () => {
    // find the input that has some value in it
    let inputField = document.querySelector(".pledgeWrapperActivated input");

    // find the name of the stand from which you need to decrease the count
    if(inputField !== null) {
      let standName = inputField.parentElement.parentElement.parentElement.querySelector(".modalStandName").innerHTML;
      if(standName === "Bamboo Stand") {
        setBambooStandCount(bambooStandCount - 1);
      }
      else {
        setBlackEditionCount(blackEditionCount - 1);
      }
    }

    if(inputField !== null) {
      setAmount(amount + Number(inputField.value));
      setBackers(backers + 1);
    }

    setSuccessModalStatus(!successModalStatus);
    setModalStatus(false);
  }
  
  const handleModalStatusClick = () => {
    setModalStatus(!modalStatus);
  }
  
  return (
    <div id="root2">
      <Header/>
      <Title handleModal={handleModalStatusClick}/>
      <ProgressBar amount={amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} backers={backers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}></ProgressBar>
      <StandContainer handleModal={handleModalStatusClick} bambooStandCount={bambooStandCount} blackEditionCount={blackEditionCount}></StandContainer>
      {modalStatus === true ? <Modal handleModal={handleModalStatusClick} handleSuccessModal={handleSuccessModalStatusClick} bambooStandCount={bambooStandCount} blackEditionCount={blackEditionCount}></Modal> : null}
      {successModalStatus === true ? <SuccessModal handleSuccessModal={handleSuccessModalStatusClick}></SuccessModal> : null}
    </div>
  );
}

export default App;
