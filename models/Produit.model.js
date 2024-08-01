const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const produitSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    lait: {
      type: String,
      required: true,
      match: [/Vache|Brebis|Chèvre|Buffelone|Autre/],
      default: "Autre",
    },
    imgUrl: {
      type: String,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Produit = model("Produit", produitSchema);

module.exports = Produit;
