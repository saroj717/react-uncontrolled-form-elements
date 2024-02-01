class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.checkboxRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.inputRef.current.value;
    const subscribe = this.checkboxRef.current.checked;
    console.log(`form submitted.\nName: ${name}\nSubscrieb: ${subscribe}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.inputRef} defaultValue="John" />
        </label>
        <label>
          Subscribe:
          <input type="checkbox" ref={this.checkboxRef} defaultChecked={true} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class FileForm extends React.Component {
  constructor(props) {
    super(props);
    this.fileRef = React.createRef(); // use .createRef() to create a ref object

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const file = this.fileRef.current.files[0].name;
    console.log(`form submitted.\nfile: ${file}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          File:
          <input type="file" ref={this.fileRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<div>
  <UncontrolledForm />
  <FileForm />
</div>);
