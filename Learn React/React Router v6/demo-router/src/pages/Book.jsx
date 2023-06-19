import { Link, useOutletContext, useParams } from "react-router-dom";

export const Book = () => {
    //useParam hook in react-router-dom used to get param in url
  const { id, name } = useParams();
  const obj = useOutletContext();
  return (
    <>
      <h2>Book {id}</h2>
      <h3>{obj.hello}</h3>
    </>
  );
};
