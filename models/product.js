let autoIncrementId = 0;

class Product {
  constructor(id, ownerId, title, imageUrl, description, price) {
    this.id = id || ++autoIncrementId;
    this.ownerId = ownerId;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

export default Product;
