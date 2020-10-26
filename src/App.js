import Header from './components/header/Header';
import Headline from './components/headline/Headline';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Headline header="Posts" desc="Click button to render posts"/>
      </main>
    </div>
  );
}

export default App;
