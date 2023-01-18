import { Schema, models, model } from "mongoose";

const storeSchema = new Schema({
  name: String,
  address: String,
  sto: [
    {
      type: Schema.Types.ObjectId,
      ref: "Sto",
    },
  ],
});

const Store = models.store || model("store", storeSchema);

export default Store;
