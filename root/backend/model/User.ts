import { Schema, model } from 'mongoose';
import { UserRoles } from './UserRoles';

interface IUser {
    username: string;
    password: string;
    roles: UserRoles;
    refreshToken: string[];
}

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    roles: {
        User: {
            type: Number,
            default: 2001
        },
        Editor: Number,
        Admin: Number
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: [String]
});
 
export default model<IUser>('User', userSchema);
