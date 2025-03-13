/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('hittesh_ahuja_cv');

// Insert a few documents into the sales collection.
db.getCollection('experience').insertMany([
    // Insert experience with the name, description and number of years as properties.
    { 'name': 'Project Management', 'description': 'Project Management', 'years': 2 },
    { 'name': 'Project Management', 'description': 'Project Management', 'years': 2 },
    { 'name': 'Project Management', 'description': 'Project Management', 'years': 2 },
    { 'name': 'Project Management', 'description': 'Project Management', 'years': 2 }
]);

// Run a find command to view items sold on April 4th, 2014.
const pm_experience = db.getCollection('experience').find({
    name: 'Project Management'
}).count();

// Print a message to the output window.
console.log(`${pm_experience}`);
