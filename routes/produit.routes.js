const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const fileUploader = require("../config/cloudinary.config");

// Require the Produit model in order to interact with the database
const Produit = require("../models/Produit.model");

// GET /produits
router.get("/", (req, res) => {
  Produit.find()
    .then((produits) => {
      res.render("produits", { produits });
    })
    .catch((error) => {
      console.log(error);
    });
});

// POST /produits
router.post("/", (req, res) => {
  const { name, price, description, lait } = req.body;
  Produit.create({ name, price, description, lait }).catch((error) => {
    console.log(error);
  });
});

// POST /produits/:id/edit
router.post("/:id/edit", (req, res) => {
  const { name, description, lait } = req.body;
  Produit.findByIdAndUpdate(req.params.id, { name, price, description, lait })
    .then(() => {
      res.redirect("/admin");
    })
    .catch((error) => {
      console.log(error);
    });
});

// POST /produits/:id/edit-photo
router.post(
  "/:id/edit-photo",
  fileUploader.single("photo"),
  (req, res, next) => {
    Produit.findByIdAndUpdate(
      req.params.id,
      { imgUrl: req.file.path },
      { new: true }
    )
      .then(() => {
        res.redirect(`/admin`);
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  }
);

// POST /produits/:id/delete
router.post("/:id/delete", (req, res) => {
  Produit.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/admin");
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
