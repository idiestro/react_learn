import './App.css';
import Categories from './components/Categories';
import Meals from './components/Meals';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          🍽️ Menú del Restaurante 🍽️
        </h1>
      </header>
      <main>
        <Categories/>
      </main>
    </div>
  );
}

export default App;
