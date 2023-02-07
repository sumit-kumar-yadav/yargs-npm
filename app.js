const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command (Run command --> node app.js add --title="A title" --body="A body")
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // Making --title as required argument
            type: 'string'   // By default it's boolean
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {  // This gets called when add argument is passed
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command (Run command --> node app.js remove)
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// This is required to run the yargs. instead
yargs.parse()

// console.log("This is the node.js built in arguments", process.argv);
// console.log("This is the yargs arguments", yargs.argv);


                // Some commands using yargs 
/*
node app.js --help
node app.js --version 
### Note that we cab customize the verison using code --> yargs.version('1.1.0')
*/


                // Terminal 
/*
sumit.yadav@Sumits-MacBook-Pro learn-yargs-library % node app.js add --title="A title" --body="A body"
Title: A title
Body: A body
sumit.yadav@Sumits-MacBook-Pro learn-yargs-library % 
*/