import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import Header from './components/header/Header';
import Headline from './components/headline/Headline';
import './app.scss';
import Button from './components/button/Button';
import ListItem from './components/listItem/ListItem';


const App = ({ posts, fetchPosts}) => {

  const getPosts = () => {
    fetchPosts();
  }
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Headline header="Posts" desc="Click button to render posts"/>
        <Button buttonText="Get Posts" handler={getPosts}/>
        {posts.length > 0 ?
        <div>
          {posts.map(({id, title, body}) => <ListItem key={id} title={title} desc={body} />)}
        </div>
      : null}
      </main>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(App);
