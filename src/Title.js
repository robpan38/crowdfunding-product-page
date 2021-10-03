import './Title.css';
import bookmarkImg from './images/icon-bookmark.svg';
import logoMastercraft from './images/logo-mastercraft.svg';

const Title = (props) => {
    return (
        <div className="titleWrapper">
            <div className="titleInnerWrapper">
                <img className="titleImg" src={logoMastercraft} alt="logoMastercraft"></img>
                <p className="titleText">Mastercraft Bamboo Monitor Riser</p>
                <p className="titleDescription">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                <div className="titleBtns">
                    <button className="backBtn" onClick={props.handleModal}>Back this project</button>
                    <button className="bookmarkBtn">
                        <img src={bookmarkImg} alt="bookmark-img"></img>
                        Bookmark
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Title;