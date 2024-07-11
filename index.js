class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    if(this.state.display === true){                                         // if
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    }else if(this.state.display === false){                                   // else
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
        )
    }
  }
};
