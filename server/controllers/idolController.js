import IdolModel from "../models/idolModel.js";

export const getAllIdols = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit);
    const offset = parseInt(req.query.offset);
    const idols = await IdolModel.findAll({ limit, offset });
    return res
      .status(200)
      .json({ meta: { limit, offset, count: idols.length }, data: idols });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error fetching Idols data" });
  }
};
