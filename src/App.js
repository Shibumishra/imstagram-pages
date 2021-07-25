import './App.css';
import Create from './components/Created';
import Navbar from './components/Navbar';
import Posts from './components/Poste';
import Stories from './components/Stories';
import Sidebar from './components/Slider';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
      <Stories />
      <Create />
      <Posts />
      <Sidebar />
      </div>
    </div>
  );
}

export default App;
