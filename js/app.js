const _private = new WeakMap();

class Book {
  constructor(title, author, price) {
    const properties = {
      _title: title,
      _author: author,
      _price: price,
    };

    _private.set(this, { properties });
  }

  get title() {
    return _private.get(this).properties["_title"];
  }

  set title(newTitle) {
    return (_private.get(this).properties["_title"] = newTitle);
  }
  get author() {
    return _private.get(this).properties["_author"];
  }

  set author(newAuthor) {
    return (_private.get(this).properties["_author"] = newAuthor);
  }
  get price() {
    return _private.get(this).properties["_price"];
  }

  set price(newPrice) {
    return (_private.get(this).properties["_price"] = newPrice);
  }

  getAllData() {
    console.log(
      `Título: ${this.title}, Autor: ${this.author}, Precio: ${this.price}`
    );
  }
}

class Comic extends Book {
  constructor(name, author, price, illustrators) {
    super(name, author, price);
    this.illustrators = illustrators;
  }

  addIllustrator(newIllustrator = []) {
    this.illustrators.push(newIllustrator);
  }

  getAllData() {
    super.getAllData();
    console.log(`Illustradores: ${this.illustrators}`);
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(amount, price) {
    this.products.push(...Array(amount).fill(price));
  }

  showProducts() {
    console.log(this.products);
  }

  calcTotal() {
    return this.products
      .map((price) => price)
      .reduce((ac, price) => ac + price, 0);
  }

  printTicket() {
    console.log(`Total a pagar ${this.calcTotal()}`);
  }
}

const book1 = new Book("1984", "George Orwell", 350);
const book2 = new Book("Frankenstein", "Mary Shelley", 200);

const comic1 = new Comic("The Killing Joke", "Alan Moore", 150, [
  "John Higgins",
]);

comic1.addIllustrator("Brian Bolland");
console.log(comic1.illustrators);

const cart = new ShoppingCart();

cart.addProduct(2, comic1.price);
cart.addProduct(1, book1.price);
cart.addProduct(1, book2.price);

cart.showProducts();

cart.printTicket();

book1.getAllData();
book2.getAllData();
comic1.getAllData();

console.log("1" + 2 + "3" + 4);

var foo = 1;
function bar() {
  foo = 10;
  return;
  function foo() {}
}
bar();
alert(foo);
