const express = require("express");
const router = express.Router();
const contactCtrl = require("../../controllers/contacts");

router.get("/", contactCtrl.listContacts);

router.get("/:contactId", contactCtrl.getContactById);

router.post("/", contactCtrl.addContact);

router.delete("/:contactId", contactCtrl.removeContact);

router.put("/:contactId", contactCtrl.updateContact);

router.patch("/:contactId/favorite", contactCtrl.updateStatusContact);

module.exports = router;
