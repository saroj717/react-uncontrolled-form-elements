var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UncontrolledForm = function (_React$Component) {
  _inherits(UncontrolledForm, _React$Component);

  function UncontrolledForm(props) {
    _classCallCheck(this, UncontrolledForm);

    var _this = _possibleConstructorReturn(this, (UncontrolledForm.__proto__ || Object.getPrototypeOf(UncontrolledForm)).call(this, props));

    _this.inputRef = React.createRef();
    _this.checkboxRef = React.createRef();

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(UncontrolledForm, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      var name = this.inputRef.current.value;
      var subscribe = this.checkboxRef.current.checked;
      console.log("form submitted.\nName: " + name + "\nSubscrieb: " + subscribe);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: this.handleSubmit },
        React.createElement(
          "label",
          null,
          "Name:",
          React.createElement("input", { type: "text", ref: this.inputRef, defaultValue: "John" })
        ),
        React.createElement(
          "label",
          null,
          "Subscribe:",
          React.createElement("input", { type: "checkbox", ref: this.checkboxRef, defaultChecked: true })
        ),
        React.createElement("input", { type: "submit", value: "Submit" })
      );
    }
  }]);

  return UncontrolledForm;
}(React.Component);

var FileForm = function (_React$Component2) {
  _inherits(FileForm, _React$Component2);

  function FileForm(props) {
    _classCallCheck(this, FileForm);

    var _this2 = _possibleConstructorReturn(this, (FileForm.__proto__ || Object.getPrototypeOf(FileForm)).call(this, props));

    _this2.fileRef = React.createRef(); // use .createRef() to create a ref object

    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    return _this2;
  }

  _createClass(FileForm, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      var file = this.fileRef.current.files[0].name;
      console.log("form submitted.\nfile: " + file);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: this.handleSubmit },
        React.createElement(
          "label",
          null,
          "File:",
          React.createElement("input", { type: "file", ref: this.fileRef })
        ),
        React.createElement("input", { type: "submit", value: "Submit" })
      );
    }
  }]);

  return FileForm;
}(React.Component);

var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render(React.createElement(
  "div",
  null,
  React.createElement(UncontrolledForm, null),
  React.createElement(FileForm, null)
));