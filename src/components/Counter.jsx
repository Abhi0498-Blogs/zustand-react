import useCounter from "../store/counter";
import Button from "./Button";

const Counter = ({}) => {
  const { count, setCount } = useCounter();
  return (
    <>
      <div className="card">
        <Button setCount={setCount} action="increase">
          Increase
        </Button>
        <div>{count}</div>
        <Button setCount={setCount} action="decrease">
          Decrease
        </Button>
      </div>
    </>
  );
};

export default Counter;
