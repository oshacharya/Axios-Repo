import useFetch from "../Hooks/useFetch";
import { useEffect } from "react";

function Child(props) {
  const set = useFetch("https://jsonplaceholder.typicode.com/todos");
  useEffect(() => {
    console.log(set)
    
        props.arr(set)
    
  });
}
export default Child;
