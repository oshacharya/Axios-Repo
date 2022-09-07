import axios from "axios";
import { useState } from "react";
// import { useEffect } from "react";

function useFetch(url) {
  let [data, setData] = useState([]);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      }).catch((err) => console.log(err));
  return { data };
}

export default useFetch;
