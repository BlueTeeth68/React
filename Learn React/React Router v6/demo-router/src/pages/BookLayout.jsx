import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export const BookLayout = () => {
  //use useSearchParam to update the link when variable change
  const [searchParam, setSearchParam] = useSearchParams({ index: 3 });
  const number = searchParam.get("index");
  return (
    <>
      <ul>
        <li>
          <Link to="/books/1"> Book 1 </Link>
        </li>
        <li>
          <Link to="/books/2"> Book 2 </Link>
        </li>
        <li>
          <Link to={`/books/${number}`}> Book {number} </Link>
        </li>
        <li>
          <Link to="/books/new"> New Book </Link>
        </li>
      </ul>
      <Outlet context={{ hello: "World." }} />
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setSearchParam({ index: e.target.value });
        }}
      />
    </>
  );
};
