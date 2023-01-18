import { Schema, models, model } from "mongoose";

const stoSchema = new Schema({
  number: String,
  material: [
    {
      type: Schema.Types.ObjectId,
      ref: "Material",
    },
  ],
});

const Sto = models.sto || model("sto", stoSchema);

export default Sto;
