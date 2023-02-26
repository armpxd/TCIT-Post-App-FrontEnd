import "./App.css";
import PostsList from './components/postsList';
import PostSearch from './components/postSearch';
import CreatePost from "./components/createPost";

function App() {
  return (
    <div className="App">
        <PostSearch/>
        <PostsList/>
        <CreatePost/>
    </div>
  );
}

export default App;
