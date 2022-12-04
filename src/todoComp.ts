import { el } from "redom";
import Todo from "./todo";

class TodoComp {
  content: Todo;
  el: HTMLElement;
  constructor(content: Todo) {
    this.content = content;
    this.el = el("p.todo", content.content);
  }

  getNote() {
    return this.content;
  }
  setNote(content: Todo) {
    this.content = content;
  }
}

export default TodoComp;
