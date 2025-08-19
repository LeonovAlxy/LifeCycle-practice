import { useEffect, useState } from "react";
const LifecycleCompFunc = () => {
  const [count, setCount] = useState(0);
  const handleClickIncrement = () => {
    return setCount((prev) => prev + 1);
  };
  useEffect(() => {
    console.log("FuncComp-componentDidMount");
    return async function dataRequest() {
      const response = await fetch(
        "https://todo-redev.herokuapp.com/api/users"
      );
      const data = await response.json();
      console.log({ data });
    };
  }, []);

  useEffect(() => {
    console.log("FuncComp-Данные обновились!");
    console.log(`${count}`);
  }, [count]);
  useEffect(() => {
    return () => console.log("componentWillUnmount");
  }, []);
  return (
    <div>
      <p>FuncComp</p>
      <p>Количество: {count}</p>
      <button onClick={handleClickIncrement}>+++</button>
    </div>
  );
};

export default LifecycleCompFunc;
