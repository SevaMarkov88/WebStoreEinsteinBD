export default class Burger {
  constructor(burger) {
    this._burger = burger;
  }

  openBurger() {
    this._burger.classList.add("burger_opened");
    this._addListener();
  }

  closeBurger() {
    this._burger.classList.remove("burger_opened");
    this._removeListener();
  }

  _addListener() {
    document.addEventListener("keydown", (evt) => this._handleEscClose(evt));
    this._burger.addEventListener("click", (evt) => {
      if (evt.target !== evt.target.classList.contains("burger__links")) {
        this.closeBurger();
      }
    });
  }

  _removeListener() {
    document.removeEventListener("keydown", (evt) => this._handleEscClose(evt));
    this._burger.removeEventListener("click", (evt) => {
      if (!evt.target.classList.contains("burger__links")) {
        this.closeBurger();
      }
    });
  }

  _handleEscClose(evt) {
    const key = evt.key;
    if (key === "Escape") {
      this.closeBurger();
    }
  }
}
