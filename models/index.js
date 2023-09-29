// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'catagory_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'catagory_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'Product_Tags'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'Tags_product'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
