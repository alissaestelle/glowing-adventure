import Header from '../components/Header'
import Search from '../components/Search'
import Article from '../components/Article'

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Search />
      <aside>Testing out a side bar!</aside>
      <main className="Posts">
        <h1>Posts</h1>
        {/* <Article /> */}
        <article>
          <header>
            <h3>Post Title</h3>
            <p>By: Author</p>
          </header>
          <p>This is content!</p>
        </article>
        <article>
          <header>
            <h3>Post Title</h3>
            <p>By: Author</p>
          </header>
          <p>This is content!</p>
        </article>
      </main>
    </div>
  )
}

export default Home
