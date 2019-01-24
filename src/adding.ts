import { el, mount } from "redom";
import Todo from "./todo";
import TodoComp from "./todoComp";

class Adding {
  content: object;
  submitButton: object;
  constructor() {
    this.el = el(
      "form#login",
      (this.content = el("input.text", { type: "text" })),
      el("button", { type: "submit" }, "+")
    );
    this.el.onsubmit = e => {
      e.preventDefault();
      let todo: Todo = new Todo(this.content.value);
      let comp: TodoComp = new TodoComp(todo);
      mount(document.body, comp);
      console.log("running" + e);
    };
  }
}
export default Adding;
