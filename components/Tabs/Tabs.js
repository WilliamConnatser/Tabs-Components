class Tabs {
  constructor() {
    this.tabLinkGrouping = document.querySelector('.tabs-links');
    this.tabLinks = document.querySelectorAll('.tabs-link');
    this.tabLinks = Array.from(this.tabLinks).map(function (link) {
      return new TabLink(link);
    });
    this.activeTab = 1;

    this.tabLinkGrouping.addEventListener('click',event => this.changeTab(event));
  }

  changeTab(event) {
    this.tabLinks[this.activeTab-1].deselect();
    this.activeTab = event.target.dataset.tab;
    this.tabLinks[this.activeTab-1].select();
  }
}


class TabLink {
  constructor(element) {

    // Assign this.element to the passed in DOM element
    this.element = element;

    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
  };

  select() {
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');

    // Call the select method on the item associated with this link
    this.tabItem.select();
  }

  deselect(){
    // Remove a class named "tabs-link-selected" to this link
    this.element.classList.remove('tabs-link-selected');
    // Call the deselect method on the item associated with this link
    this.tabItem.deselect();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    this.element.classList.add('tabs-item-selected');
  }

  deselect() {
    this.element.classList.remove('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

new Tabs()