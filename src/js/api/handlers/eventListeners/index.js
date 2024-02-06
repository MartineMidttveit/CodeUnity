/**
 * Represents an event listener that can be added to an element.
 */
export default class EventListener {
  /**
   * Creates a new instance of EventListener.
   * @param {HTMLElement} element - The element to attach the event listener to.
   * @param {string} type - The type of event to listen for.
   * @param {Function} callback - The callback function to be executed when the event is triggered.
   */
  constructor(element, type, callback) {
    this.element = element;
    this.type = type;
    this.callback = callback;
  }

  /**
   * Adds the event listener to the element.
   */
  add() {
    this.element.addEventListener(this.type, this.callback);
  }

  /**
   * Removes the event listener from the element.
   */
  remove() {
    this.element.removeEventListener(this.type, this.callback);
  }
}
