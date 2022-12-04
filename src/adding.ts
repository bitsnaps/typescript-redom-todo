import { el, mount } from "redom";
import Todo from "./todo";
import TodoComp from "./todoComp";

class Adding {
  content: HTMLInputElement;
  submitButton: HTMLElement;
  el: HTMLElement;
  constructor() {
    this.el = el(
      "form#login",
      (this.content = el("input.text", { type: "text", autofocus: true }) as HTMLInputElement),
      el("button", { type: "submit" }, "+")
    );
    this.el.onsubmit = e => {
      e.preventDefault();
      let todo: Todo = new Todo(this.content.value);
      let comp: TodoComp = new TodoComp(todo);
      mount(document.body, comp);
      this.content.value = '';
    };
  }
}
export default Adding;
