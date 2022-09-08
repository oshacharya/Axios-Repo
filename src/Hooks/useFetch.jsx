import axios from "axios";
import { useState } from "react";

function useFetch(url) {
  const [dat, setDat] = useState([]);

  /*
  fetch(url)
  .then((response) => response.json())
  .then((data) => setDat(data)); 
  */
  
   axios
      .get(url)
      .then((response) => {
        console.log(response.data)
        setDat(response.data);
      }).catch((err) => console.log(err));
  
  return dat;
}

export default useFetch;
