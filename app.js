// const fullName = require("./other.js");
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command({
    command: "add",
    describe: "Add a note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: 'Note title to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: 'Note title to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

yargs.command({
    command: "list",
    describe: "List note",
    builder: {
        list: {
            describe: 'list notes',
            demandOption: false,
            type: 'string'
        }
    },
    handler() {
        notes.listNotes();
    }
});

yargs.parse();