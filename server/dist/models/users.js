import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    authentication: {
        password: {
            type: String,
            required: true,
            select: false,
        },
        salt: { type: String, select: false },
        refreshToken: {
            type: String,
            select: false,
        },
    },
    // submission: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "",
    //   },
    // ],
});
export const UserModel = mongoose.model("User", userSchema);
export const getUsers = () => UserModel.find();
export const getUserByEmail = (email) => UserModel.findOne({ email: email });
export const getUserById = (id) => UserModel.findById(id);
export const createUser = (values) => new UserModel(values).save().then((user) => user.toObject());
export const deleteUserById = (id) => UserModel.findOneAndDelete({ _id: id });
export const updateUserById = (id, values) => UserModel.findByIdAndUpdate(id, values);
//# sourceMappingURL=users.js.map