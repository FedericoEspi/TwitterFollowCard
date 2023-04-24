import './App.css';
import TwitterFollowCard from './component/TwitterFollowCard';

function App() {
  const formatUser = (userName) => `@${userName}`

  return (
    <div className='app'>
     <TwitterFollowCard formatUser={formatUser} userName="FedericoEspi" name="Federico Espiñeyra" />
     <TwitterFollowCard formatUser={formatUser} userName="NetflixLAT" name="Netflix Latinoamérica" />
     <TwitterFollowCard formatUser={formatUser} userName="YouTubeLATAM" name="YouTube Latinoamérica" />
    </div>
  );
}

export default App;
