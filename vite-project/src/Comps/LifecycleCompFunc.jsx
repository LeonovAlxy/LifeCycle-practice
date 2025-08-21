import { useEffect, useState } from "react";
const LifecycleCompFunc = () => {
  const [count, setCount] = useState(0);

  async function dataRequest() {
    const data = await fetch("https://todo-redev.herokuapp.com/api/users");
    const response = await data.json();
    console.log({ response });
  }

  useEffect(() => {
    dataRequest();
    console.log("FuncComp-componentDidMount");
  }, []);

  useEffect(() => {
    console.log("FuncComp-Данные обновились!");
    console.log(`${count}`);
  }, [count]);
  useEffect(() => {
    return () => console.log("componentWillUnmount");
  }, []);

  const handleClickIncrement = () => {
    return setCount((prev) => prev + 1);
  };
  return (
    <div>
      <p>FuncComp</p>
      <p>Количество: {count}</p>
      <button onClick={handleClickIncrement}>+++</button>
    </div>
  );
};

export default LifecycleCompFunc;
