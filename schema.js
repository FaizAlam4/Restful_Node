const mongoose = require('mongoose')

let obj = {


    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },
    roll: {
        type: Number,
        required: true
    },
    grade: {

        type: String,
        required: true
    }
}

const student = mongoose.model('student', obj);

module.exports = student;