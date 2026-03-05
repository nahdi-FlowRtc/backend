import mongoose from "mongoose";

export function Connect(url){

    mongoose.connect(url)
    .then(() => console.log('DB connected ✅'))
    .catch(err => console.log(err));
}