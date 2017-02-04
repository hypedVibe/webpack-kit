import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../css/style.css';

import angular from 'angular';
import bands from './bands/index';

const app = angular.module('app', []);
bands(app);