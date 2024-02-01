class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(`form submitted: `);
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <imput type="text"/>
        </label>
        <imput type="submit" value="Submit" />
      </form>
    )
  }
}


const container = document.getElementById('root');
const root = ReactDom.createRoot(container);
root.render(<UncontrolledForm/>);