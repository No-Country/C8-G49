import { Schema, model, Document } from 'mongoose'
import bcrypt from 'bcrypt'

export interface UserInterface extends Document {
    email: string;
    password: string;
    comparePassword: (password: string) => Promise<boolean>
}

const UserSchema = new Schema({

    fullname: {
        type: String,
        required: true,
        trim: true,
    },

    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },

    age: {
        type: Number
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    profilePic: {
        type: String,
    },

    description: String,

    stories: [{ type: Schema.Types.ObjectId, ref: "Stories" }]

},
    {
        timestamps: true,
    });

UserSchema.pre<UserInterface>("save", async function (next) { // pre --> ejecuta antes de guardar la data.
    const user = this;

    if (!user.isModified("password")) return next(); // Si el user es nuevo, continua

    const salt = await bcrypt.genSalt(10); // genera un "string" que cifra el dato, 10 es la cantidad de veces q ejecuta el alg
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash; // password cifrada

    next();
});

UserSchema.methods.comparePassword = async function (password: string): Promise<Boolean> {
    return await bcrypt.compare(password, this.password);
};


export default model<UserInterface>("User", UserSchema);