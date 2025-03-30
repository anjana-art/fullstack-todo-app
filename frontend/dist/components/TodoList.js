"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _axios = _interopRequireDefault(require("axios"));
require("./TodoList.css");
var _checked = _interopRequireDefault(require("./images/checked.png"));
var _unchecked = _interopRequireDefault(require("./images/unchecked.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const cross = "\u00d7";
const TodoList = _ref => {
  let {
    todos,
    fetchTodos,
    setTodos
  } = _ref;
  const handleDelete = async id => {
    try {
      await _axios.default.delete(`http://localhost:5000/api/todos/${id}`);
      fetchTodos(); // Refresh the todo list
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };
  const handleToggleComplete = async (id, completed) => {
    try {
      await _axios.default.put(`http://localhost:6002/api/todos/${id}`, {
        completed: !completed
      });
      fetchTodos(); // Refresh the todo list
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "todoapp"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    id: "list-container"
  }, todos.map(todo => /*#__PURE__*/_react.default.createElement("li", {
    key: todo._id
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: todo.completed ? _checked.default : _unchecked.default,
    alt: todo.completed ? 'Checked' : 'Unchecked',
    onClick: () => handleToggleComplete(todo._id, todo.completed)
  }), /*#__PURE__*/_react.default.createElement("span", null, todo.title), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => handleDelete(todo._id),
    id: "deletebutton"
  }, cross, " "))))));
};
var _default = exports.default = TodoList;