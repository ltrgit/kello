import { Meteor } from 'meteor/meteor';

import '../imports/api/tasks.js';

import { Tasks } from '../imports/api/tasks';

function TickTock() {
    Meteor.call('insert');
}

Meteor.startup(() => {
  // code to run on server at startup
    

});
