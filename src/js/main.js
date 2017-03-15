import angular from 'angular';
import 'angular-ui-router';
import ContactController from './controllers/contact';

angular
   .module('app', [])
   .module('app', ['ui.router'])
    .controller('ContactController', ContactController)
