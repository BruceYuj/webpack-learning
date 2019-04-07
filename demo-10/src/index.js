import counter from './counter';
import number from './number';
import './style.css';

counter();
number();

if(module.hot) {
  module.hot.accept('./number.js', function() {
    console.log('Accepting the updated number module!!');
    document.body.removeChild(document.getElementById('Number'));
    number();
  })
}