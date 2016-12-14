if (process.env.NODE_ENV !== 'production') {
  require('../index.html')
}

import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';

import '../styles/style.scss'; 
 
import {ab} from './module-a';
import {a} from './module-b';
import {b} from './module-c'; 
 
console.log(ab);
console.log(a);