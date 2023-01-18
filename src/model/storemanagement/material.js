import { Schema, models, model } from "mongoose";

const materialSchema = new Schema({
  name: String,
  code: Number,
  category: {
    type:String,
    enum: ["accessories", "cable", "drum"],
  },
});

const Material = models.material || model("material", materialSchema);

export default Material;
