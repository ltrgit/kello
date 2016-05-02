import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
export const Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('tasks', function tasksPublication() {
        return Tasks.find();
    });
    
    // The clock that is TICKING
    Meteor.setInterval(function(){
        Tasks.insert({
            text: "Time " + (new Date).toString(),
        });
    }, 1000);

}

Meteor.methods({
    'insert'() {
        Tasks.insert({
            text: (new Date).toString(),
        });
    },
});