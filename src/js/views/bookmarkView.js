import icons from 'url:../../img/icons.svg';
import View from './view';
import previewView from './previewView';

class bookmarkView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmark yet. Find a nice recipe and bookmark it';
  _message = '';

  addHandlerRender(handler) { 
    window.addEventListener('load' ,handler);
  }
  
  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new bookmarkView();
