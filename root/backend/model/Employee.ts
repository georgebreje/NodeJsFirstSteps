import { Schema, model, connect } from 'mongoose';

const mongoose = require('mongoose');

interface IEmployee {
    firstname: string;
    lastname: string;
}

const employeeSchema = new Schema<IEmployee>({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Employee', employeeSchema);