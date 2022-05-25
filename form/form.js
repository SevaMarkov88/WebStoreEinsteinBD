export default class Form {
  constructor(formBlock) {
    this._formBlock = formBlock;
  }

  openForm() {
    this._formBlock.classList.add("login_opened");
    this._addListener();
  }

  _closeForm() {
    this._formBlock.classList.remove("login_opened");
    this._removeListener();
  }

  _addListener() {
    document.addEventListener("keydown", (evt) => this._handleEscClose(evt));
    this._formBlock.addEventListener("click", (evt) => {
      if (
        !evt.target.classList.contains("form__login") &&
        !evt.target.classList.contains("form__input")
      ) {
        this._closeForm();
      }
    });
  }

  _removeListener() {
    document.removeEventListener("keydown", (evt) => this._handleEscClose(evt));
    this._formBlock.removeEventListener("click", (evt) => {
      if (
        !evt.target.classList.contains("form__login") &&
        !evt.target.classList.contains("form__input")
      ) {
        this._closeForm();
      }
    });
  }

  submitForm() {}

  _handleEscClose(evt) {
    const key = evt.key;
    if (key === "Escape") {
      this._closeForm();
    }
  }
}
