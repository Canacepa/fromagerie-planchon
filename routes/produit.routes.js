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

// GET /produits/:id/edit
router.get("/:id/edit", (req, res) => {
  Produit.findById(req.params.id)
    .then((produit) => {
      res.render("edit-produit", { produit });
      console.log(produit);
    })
    .catch((error) => {
      console.log(error);
    });
});

// POST /produits/:id/edit
router.post("/:id/edit", (req, res) => {
  const { name, description, lait } = req.body;
  Produit.findByIdAndUpdate(req.params.id, { name, description, lait })
    .then(() => {
      res.redirect("/admin");
    })
    .catch((error) => {
      console.log(error);
    });
});

// POST /produits/:id/edit-photo
router.post('/:Id/edit-photo', fileUploader.single('photo'), (req, res, next) => {
  console.log(req.file)
  console.log(req.params)
	Produit.findByIdAndUpdate(req.params, { ingUrl: req.file.path }, { new: true })
		.then(() => {
			res.redirect(`/admin`);
		})
		.catch((err) => {
			console.log(err);
			next(err);
		});
});

module.exports = router;
