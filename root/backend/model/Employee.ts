import { Schema, model } from 'mongoose';

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

export default model<IEmployee>('Employee', employeeSchema);
