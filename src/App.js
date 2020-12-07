import Profile from './Component/Profile';
import './App.css';
import NavBar from './Component/NavBar';
const profile = {
  image: "./res/IMG_20190401_204533_448.jpg",
  name: "Ahmed",
  lastName: "Ben Zid",
  Adresse: {
    city: "Tunis",
    cp: "1001"
  }
};

function App() {
  return (
    <div>
      <NavBar obj={profile} />
      <Profile />
    </div>
  );
}

export default App;
