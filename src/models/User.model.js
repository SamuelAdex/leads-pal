import mongoose, { Schema, model, models } from "mongoose";
import { hashSync } from "bcryptjs";

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "this field must not be empty"],
    },
    lastName: {
      type: String,
      required: [true, "this field must not be empty"],
    },
    username: {
      type: String,
      required: [true, "this field must not be empty"],
    },
    email: {
      type: String,
      required: [true, "this field must not be empty"],
    },
    password: {
      type: String,
      required: [true, "this field must not be empty"],
    },
    points: {
      type: Number,
      default: 0,
      required: [true, "this field must not be empty"],
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  console.log("testing save");

  if (this.isModified("password")) {
    const data = this.password;
    this.password = hashSync(data, 12);
  }

  // if (this.isModified("passcode")) {
  //   this.passcode = hashSync(this.passcode, 12);
  // }
  // if (this.isModified("otp")) {
  //   this.otpDate = new Date();
  // }

  // if (this.isModified("privateKey")) {
  //   this.privateKey = encode(this.privateKey);
  // }

  next();
});

const User =
  models?.User || model("User", UserSchema);

export default User;
