import {Link} from 'react-router-dom';

export const BookList = () => {
  return (
    <>
      <h1>Book List</h1>
      <Link to="/books/1/abc"> Book 1 </Link>
      <Link to="/books/2/xyz"> Book 2 </Link>
    </>
  );
};
