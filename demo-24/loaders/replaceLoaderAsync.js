module.exports = function(source) {
  const result =  source.replace('world', 'god')
  const callback = this.async();
  setTimeout(() => {
    callback(null, result);
  }, 1000)
}