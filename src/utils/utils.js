// Attributes
export function setAttr(ele, attr, value) {
  ele.setAttribute(attr, value);
}

// Classes
export function addClass(theClass, ele) {
  ele.classList.add(theClass);
}

export function removeClass(theClass, ele) {
  ele.classList.remove(theClass);
}

// Local Storage
export function addToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

export function readFromLocalStorage(key) {
  return localStorage.getItem(key);
}
