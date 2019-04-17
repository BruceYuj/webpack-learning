module.exports = function(source) {
  const result =  source.replace('bruce', 'world')
  this.callback(null, result);
}