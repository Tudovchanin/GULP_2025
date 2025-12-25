import { modal } from "../components/modal";

const btn = document.getElementById("openModal");
if (btn) {
  btn.addEventListener("click", modal);
}
const test = 'home';

console.log(test);