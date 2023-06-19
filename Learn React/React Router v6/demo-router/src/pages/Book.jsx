import { Link, useParams } from "react-router-dom";

export const Book = () => {
    //useParam hook in react-router-dom used to get param in url
  const { id, name } = useParams();
  return (
    <>
      <h1>Book {id}</h1>
      <h2>Book name: {name}</h2>
      <Link to="/">Home</Link>
    </>
  );
};
