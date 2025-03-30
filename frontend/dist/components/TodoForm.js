"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _axios = _interopRequireDefault(require("axios"));
var _notepen = _interopRequireDefault(require("./images/notepen.png"));
require("./TodoForm.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const TodoForm = _ref => {
  let {
    fetchTodos
  } = _ref;
  const [title, setTitle] = (0, _react.useState)('');
  const handleSubmit = async e => {
    e.preventDefault();
    if (!title) return;
    try {
      await _axios.default.post('http://localhost:6002/api/todos', {
        title
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => console.log(response.data)).catch(error => console.error('Error:', error));
      setTitle(''); // Clear the input field
      fetchTodos(); // Refresh the todo list
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };
  return /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "todo-app "
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Todo List  ", /*#__PURE__*/_react.default.createElement("img", {
    src: _notepen.default,
    alt: "pen img"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "input-box",
    value: title,
    onChange: e => setTitle(e.target.value),
    placeholder: "Add a new task"
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    id: "addbutton"
  }, "Add"))));
};
var _default = exports.default = TodoForm;