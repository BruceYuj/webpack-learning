function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(({default: _})=> {
    let element = document.createElement('div');
    element.innerHTML = _.join(['a', 'b', 'c']);
    return element;
  }).catch(error => 'Anerror occurred');
}

getComponent().then(component => {
  document.body.appendChild(component);
});
// import _ from 'lodash';
// _.join('a', 'b');