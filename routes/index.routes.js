const express = require("express");
const Produit = require("../models/Produit.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const mongoose = require("mongoose");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  Produit.find()
    .then((produits) => {
      res.render("index", { produits });
    })
    .catch((error) => {
      console.log(error);
    });
});

/* GET admin page */
router.get("/admin", isLoggedIn, (req, res) => {
  Produit.find()
    .then((produits) => {
      console.log(produits);
      res.render("admin", { produits });
    })
    .catch((error) => {
      console.log(error);
    });
});

/* GET maison planchon page */
router.get("/maison-planchon", (req, res) => {
  res.render("maison-planchon");
});

/* GET offres et prestations page */
router.get("/offres-prestations", (req, res) => {
  res.render("offres-presta");
});

/* GET professionnels page */
router.get("/professionnels", (req, res) => {
  res.render("professionnels");
});

/* GET boutique page */
router.get("/boutiques", (req, res) => {
  res.render("boutiques");
});

/* GET partenaires page */
router.get("/partenaires", (req, res) => { 
  res.render("partenaires");
});

module.exports = router;
