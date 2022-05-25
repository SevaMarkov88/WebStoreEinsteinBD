import { users } from "./users.js";
export default class Form {
  constructor(formBlock) {
    this._formBlock = formBlock;
    this._inputList = this._formBlock.querySelectorAll(".form__input");
    this._submitBtn = this._formBlock.querySelector(".form__button");
  }

  openForm() {
    this._formBlock.classList.add("login_opened");
    this._addListener();
  }

  _closeForm() {
    this._formBlock.classList.remove("login_opened");
    this._removeListener();
  }

  _getInputValuse() {
    const loginValues = {};
    this._inputList.forEach((input) => {
      loginValues[input.name] = input.value;
    });
    return loginValues;
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
    this._submitBtn.addEventListener("click", (evt) => {
      this._handelSubmitForm(evt);
    });
  }

  _loginCheck(user) {
    users.forEach((item) => {
        return JSON.stringify(item) === JSON.stringify(user);
    })
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
    this._submitBtn.removeEventListener("click", (evt) => {
      this._handelSubmitForm(evt);
    });
  }

  _handelSubmitForm(evt) {
    evt.preventDefault();
    const userInfo = this._getInputValuse();
    this._loginCheck(userInfo);
  }

  _handleEscClose(evt) {
    const key = evt.key;
    if (key === "Escape") {
      this._closeForm();
    }
  }
}
