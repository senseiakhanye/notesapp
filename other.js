require("module");
console.log("other.js");

const fullName = (firstname, surname) => {
    return firstname +  " " + surname;
}

module.exports = fullName;