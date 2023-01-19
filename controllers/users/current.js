const current = async (req, res, next) => {
  try {
    const { email, subscription } = req.user;
    res.json({
      status: "success",
      code: 200,
      user: {
        email,
        subscription,
      },
    });
  } catch (error) {
    res.status(401).json({ message: "Not authorized" });
    next(error);
  }
};

module.exports = current;
