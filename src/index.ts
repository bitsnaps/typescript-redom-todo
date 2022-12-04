import "./style.css";
import { el, mount, unmount } from "redom";
import Adding from "./adding";
import { RedomElement } from "redom";

var h1: RedomElement = el("h1", "Hello RE:DOM!");
var logo: RedomElement = el("h1", "Hello RE:DOM");
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app")!;
//appDiv.innerHTML = h1.innerHTML;

// mount(document.body, logo);

const todo = new Adding();
mount(appDiv, logo);
mount(appDiv, todo);

console.log("mount again");
