import React, { useState } from "react";
import { bookContext } from "../../Contexts/Context";
import "./css/Filter.css";
import { useSearchParams } from "react-router-dom";

function Filter({ setCurrentPage }) {
  const book = React.useContext(bookContext);
  const genreArray = React.useMemo(() => {
    const genreSet = new Set();
    book.BookInfo.forEach((bookItem) => genreSet.add(bookItem.Genre));
    console.log('Compiled...')
    return Array.from(genreSet);
  }, [book]);

    // const genreSet = new Set();
    // book.BookInfo.forEach((bookItem) => genreSet.add(bookItem.Genre));
    // console.log('Compiled...')
    // const genreArray = Array.from(genreSet);
  
    let [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams?.get("genre")?.split(",");

  const arrayToBeUsedInParams = React.useMemo(() => {
    const returnArray = [];
    if (query && query[0] !== ''){
      for (let key of query) {
        returnArray.push(key);
      }
    }
    return returnArray
  }, [query])

  const handleGenreChange = (e) => {
    if (arrayToBeUsedInParams.length){
      arrayToBeUsedInParams.includes(e.target.value) ? arrayToBeUsedInParams.splice(arrayToBeUsedInParams.indexOf(e.target.value), 1) : arrayToBeUsedInParams.push(e.target.value);
      console.log(arrayToBeUsedInParams.length)
      if (!arrayToBeUsedInParams.length){
        console.log(searchParams, 'sdsd')
        

      }
    }else{
      arrayToBeUsedInParams.push(e.target.value);
      console.log(e.target.value)
    }
    console.log(arrayToBeUsedInParams)
    setSearchParams({ genre: [arrayToBeUsedInParams] });
    setCurrentPage(1);
  };

  return (
    <div className="home-filter">
      <ul>
        {genreArray.map((bookGenre, index) => {
          return (
            <li style={{ listStyleType: "none" }} key={index}>
              <input
                type="checkbox"
                value={`${bookGenre}`}
                onClick={handleGenreChange}
                checked={
                  arrayToBeUsedInParams.includes(bookGenre)
                    ? true
                    : false
                }
                readOnly
              />{" "}
              {bookGenre}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Filter;
