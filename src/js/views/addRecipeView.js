import View from './view';
import icons from 'url:../../img/icons.svg';

class addRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.');
  _btnClose = document.querySelector('.btn--close-modal');

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', function () {
      this._overlay.classList.toggle('hidden');
      this.window.classList.toggle('hidden');
    });
  }
}

export default new addRecipeView();
