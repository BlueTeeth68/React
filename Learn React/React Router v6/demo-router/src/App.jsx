import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { BookList } from "./pages/BookList";
import { Book } from "./pages/Book";
import { NewBook } from "./pages/NewBook";
import { NotFound } from "./pages/NotFound";

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Book List</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        {/*Pass param on url*/}
        <Route path="/books/:id" element={<Book />} />
        {/*Notice here, The two url is the same in lower react router dom.
        But in react route v6, these two are diffrent.*/}
        <Route path="/books/new" element={<NewBook />} />
        <Route path="*" element={<NotFound />} />;
      </Routes>
    </>
  );
};

export default App;
