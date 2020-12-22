require("module");
const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = readNotes();
    const duplicateNotes = notes.filter(note => note.title.toLowerCase() == title.toLowerCase());

    if (duplicateNotes.length > 0) {
        console.log(chalk.red("Note already exist"));
        return ;
    }
    notes.push({
        title: title,
        body: body
    });
    saveNotes(notes);
    console.log(chalk.green("Note saved successfuly"));
};

const removeNote = (title) => {
    const notes = readNotes();
    let foundNote = false;
    const editedNotes = notes.filter(note => {
        if (!foundNote) {
            foundNote = note.title.toLowerCase() == title.toLowerCase();
        }
        return (note.title.toLowerCase() != title.toLowerCase());
    });

    // Could have compared the two arrays to check if anything was removed.
    // if (notes.length != editedNotes.length)
    if (!foundNote) {
        console.log(chalk.red("Nothing to remove"));
        return ;
    }
    saveNotes(editedNotes);
    console.log(chalk.green("Removed " + title));
}

const saveNotes = notes => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const readNotes = () => {
    try {
        const content = fs.readFileSync('notes.json');
        const jsonData = content.toString();
        return JSON.parse(jsonData);
    }
    catch (err) {
        return [];
    }
}

const listNotes = () => {
    const notes = readNotes();
    console.log(chalk.green("Notes"));
    notes.forEach( (note) => {
        console.log(note.title);
    })
}

const readNote = title => {
    const notes = readNotes();
    const noteData = notes.find( (note) => {
        return (note.title === title);
    });

    debugger;

    if (noteData !== undefined) {
        console.log(chalk.green(noteData.body));
    }
    else {
        console.log(chalk.red("Note not found"));
    }
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}