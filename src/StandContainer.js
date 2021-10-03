import './StandContainer.css';
import Stand from './Stand';

const StandContainer = () => {
    return (
        <div className="standContainerWrapper">
            <p className="standContainerTitle">About this project</p>
            
            <p className="standContainerDescription">
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
    to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
    your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
            </p>
            
            <p className="standContainerDescription">
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
    to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>

            <Stand standName="Bamboo Stand" standAmount="25" standDescription="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list." standCount="101"></Stand>
            <Stand standName="Black Edition Stand" standAmount="75" standDescription="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
  member list. Shipping is included." standCount="64"></Stand>
            <Stand standName="Mahogany Special Edition" standAmount="200" standDescription="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
  to our Backer member list. Shipping is included." standCount="0" opacity="0.6"></Stand>
        </div>
    );
}

export default StandContainer;