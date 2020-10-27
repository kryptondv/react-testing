import Header from './components/header/Header';
import Headline from './components/headline/Headline';
import './app.scss';
import Button from './components/button/Button';

function App() {

  const getPosts = () => {
    console.log('Get posts')
  }

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Headline header="Posts" desc="Click button to render posts"/>
        <Button buttonText="Get Posts" handler={getPosts}/>
      </main>
    </div>
  );
}

export default App;
