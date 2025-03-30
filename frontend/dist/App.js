"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _TodoList = _interopRequireDefault(require("./components/TodoList.js"));
var _TodoForm = _interopRequireDefault(require("./components/TodoForm.js"));
require("./App.css");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function App() {
  const [todos, setTodos] = (0, _react.useState)([]);

  // Fetch todos from the backend
  const fetchTodos = async () => {
    try {
      const response = await _axios.default.get('http://localhost:6002/api/todos');
      //const response = await fetch('http://backend:5000/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  // Fetch todos when the component mounts
  (0, _react.useEffect)(() => {
    fetchTodos();
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement(_TodoForm.default, {
    fetchTodos: fetchTodos
  }), /*#__PURE__*/_react.default.createElement(_TodoList.default, {
    todos: todos,
    fetchTodos: fetchTodos
  }));
}
var _default = exports.default = App;