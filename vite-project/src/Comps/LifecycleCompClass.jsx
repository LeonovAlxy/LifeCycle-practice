import React from "react";

class LifecycleCompClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClickIncrement = this.handleClickIncrement.bind(this);
  }

  handleClickIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount() {
    fetch("https://todo-redev.herokuapp.com/api/users")
      .then((response) => response.json())
      .then((data) => console.log({ data }));
    console.log("Компонент был смонтирован!");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Данные обновились!`);
      console.log(this.state.count);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count % 2 === 0;
  }
  componentWillUnmount() {
    console.log("Компонент удалён");
  }
  render() {
    return (
      <div>
        <p>ClassComp</p>
        <p>Количество: {this.state.count}</p>
        <button onClick={this.handleClickIncrement}>+++</button>
      </div>
    );
  }
}
export default LifecycleCompClass;
