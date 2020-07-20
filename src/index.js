import "./styles.css";

import postsDb from "./db/posts.json";
const postsListRef = document.querySelector(".js-menu");
// Створюємо галарею постів по одному елементу

import toGeneratePost from "./templates/allPosts.hbs";
const newPost = toGeneratePost(postsDb);
postsListRef.insertAdjacentHTML("beforeend", newPost);

//............................Перемикач Світла............................//

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const bodySwitch = document.querySelector("body");
const inputSwitch = document.querySelector(".js-switch-input");
inputSwitch.addEventListener("change", () => {
  inputSwitch.checked
    ? (localStorage.setItem("colorTheme", " "),
      bodySwitch.classList.add(Theme.DARK),
      bodySwitch.classList.remove(Theme.LIGHT))
    : (localStorage.removeItem("colorTheme"),
      bodySwitch.classList.add(Theme.LIGHT),
      bodySwitch.classList.remove(Theme.DARK));
});

if (localStorage.getItem("colorTheme")) {
  bodySwitch.classList.add(Theme.DARK);
  inputSwitch.checked = true;
}
