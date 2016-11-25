

exports.findAllProducts = function(req, res) {
  res.send('Find all');
};

exports.findById = function(req, res) {
  res.send('Find by ID');
}

exports.addProducts = function(req, res) {
  res.send('Add products');
};

exports.updateProduct = function(req, res) {
  res.send('Update product');
};

exports.deleteProduct = function(req, res) {
  res.send('Delete product');
}
