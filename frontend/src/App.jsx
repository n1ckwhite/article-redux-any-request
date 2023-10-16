import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import {
  clearCount,
  getCount,
  minusCount,
  plusCount,
} from "./redux/slice/countSlice";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCount());
  }, []);
  const plus = () => {
    dispatch(plusCount(count.id));
  };
  const minus = () => {
    dispatch(minusCount(count.id));
  };
  const clear = () => {
    dispatch(clearCount(count.id));
  };
  return (
    <div className="count">
      <p>Count</p>
      <h1>{count.count}</h1>
      <div className="btns">
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={clear}>clear</button>
      </div>
    </div>
  );
}

export default App;
