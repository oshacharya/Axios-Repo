import useFetch from "../Hooks/useFetch";

const Child = ({arr}) => {
  const a = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
  <button onClick={()=>arr(a)}>Display</button>
  )
};
export default Child;
/*
function Child(props) {
  function Set(a) {
    const a = useFetch("https://jsonplaceholder.typicode.com/todos");
    props.arr(a);
  }
  return (
    <>
      <button onClick={Set(a)}>Display</button>
    </>
  );
}
export default Child;
*/
