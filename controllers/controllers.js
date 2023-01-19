const {
  Contact,
  validateSchema,
  validateStatusSchema,
} = require("../../models/contact");

const listContacts = async (req, res, next) => {
  try {
    const result = await Contact.find();
    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      code: 500,
      message: error.message,
      data: "Internal Server Error",
    });
  }
};

const getContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findById(contactId);
    if (!result) {
      res.status(404).json({ message: "Not found" });
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
};

const addContact = async (req, res, next) => {
  try {
    const { error } = validateSchema.validate(req.body);
    if (error) {
      res.status(404).json({ message: "missing required name field" });
      return;
    }
    const newContact = await Contact.create(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: { newContact },
    });
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
};

const removeContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
    if (!result) {
      res.status(404).json({ message: "Not found" });
    }
    res.json({
      status: "success",
      code: 200,
      message: "contact deleted",
      data: {
        result,
      },
    });
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
};

const updateContact = async (req, res, next) => {
  try {
    const { error } = validateSchema.validate(req.body);
    if (error) {
      res.status(404).json({ message: "missing required name field" });
      return;
    }
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });
    if (!result) {
      res.status(400).json({ message: "missing fields" });
    }
    res.json({
      status: "success",
      code: 200,
      message: "contact updated",
      data: {
        result,
      },
    });
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
};

const updateStatusContact = async (req, res, next) => {
  try {
    const { error } = validateStatusSchema.validate(req.body);
    if (error) {
      res.status(400).json({ message: "missing field favorite" });
    }
    const { contactId } = req.params;

    const updatedStatus = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });

    if (!updatedStatus) {
      res.status(400).json({ message: "missing field favorite" });
    }
    res.json({
      status: "success",
      code: 200,
      message: `Status 'favorite' is ${req.body.favorite}`,
      data: {
        result: updatedStatus,
      },
    });
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
};
