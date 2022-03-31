import "./style.css";
import { el, mount, unmount } from "redom";
import Adding from "./adding";

var h1: object = el("h1", "Hello RE:DOM!");
var logo: object = el("h1", "Hello RE:DOM");
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
//appDiv.innerHTML = h1.innerHTML;

// mount(document.body, logo);

const todo = new Adding();
mount(appDiv, logo);
mount(appDiv, todo);

console.log("mount again");
