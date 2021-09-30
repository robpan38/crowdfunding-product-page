import './progressBar.css';

const ProgressBar = () => {
    return (
        <div className="progressWrapper">
            <div className="progressNumbers">
                <div className="money progressDisplay">
                    <p className="current">$89.914</p>
                    <p className="target">of $100.000 backed</p>
                </div>
                <hr class="vertical"></hr>
                <div className="backers progressDisplay">
                    <p className="current">5.007</p>
                    <p className="target">total backers</p>
                </div>
                <hr class="vertical"></hr>
                <div className="days progressDisplay">
                    <p className="current">56</p>
                    <p className="target">days left</p>
                </div>
            </div>
            <div className="progressBar">
                <div className="progressBarColor"></div>
            </div>
        </div>
    );
}

export default ProgressBar;