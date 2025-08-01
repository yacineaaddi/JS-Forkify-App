import icons from 'url:../../img/icons.svg';
import recipeView from './recipeView.js';
import resultsView from './resultsView.js';

export default class View {
  _data;

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    /*if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();*/
    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDom = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDom.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));
    /*
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // Update changed TEXT
      if (
        newEl.firstChild?.nodeValue &&
        newEl.firstChild?.nodeValue !== curEl.firstChild?.nodeValue
      ) {
        curEl.textContent = newEl.textContent;
      }
      // Update changed ATTRIBUTES
      if (newEl.firstChild?.nodeValue !== curEl.firstChild?.nodeValue) {
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });*/
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];

      // 1. Update TEXT content if it's changed and not empty
      if (
        newEl.firstChild?.nodeType === 3 && // Node.TEXT_NODE
        newEl.textContent.trim() !== curEl.textContent.trim()
      ) {
        curEl.textContent = newEl.textContent;
      }

      // 2. Update ATTRIBUTES if changed
      Array.from(newEl.attributes).forEach(attr => {
        if (curEl.getAttribute(attr.name) !== attr.value) {
          curEl.setAttribute(attr.name, attr.value);
        }
      });
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = ` <div class="spinner"><svg> <use href="${icons}#icon-loader"></use>
        </svg>
        </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `<div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `<div class="message">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${'message'}</p>
          </div>`;
    this._clear;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
