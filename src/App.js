import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Title from './Title';
import ProgressBar from './progressBar';
import Stand from './Stand';

function App() {
  return (
    <div id="root2">
      <Header/>
      <Title/>
      <ProgressBar/>
      <Stand standName="Bamboo Stand" standAmount="25" standDescription="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list." standCount="101"></Stand>
    </div>
  );
}

export default App;
