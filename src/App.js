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

  const handleSuccessModalStatusClick = () => {
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
      <ProgressBar/>
      <StandContainer/>
      {modalStatus === true ? <Modal handleModal={handleModalStatusClick} handleSuccessModal={handleSuccessModalStatusClick}></Modal> : null}
      {successModalStatus === true ? <SuccessModal handleSuccessModal={handleSuccessModalStatusClick}></SuccessModal> : null}
    </div>
  );
}

export default App;
