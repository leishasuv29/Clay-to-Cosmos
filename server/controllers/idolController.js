import IdolModel from '../models/idolModel.js'

export const getAllIdols = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit);
    const offset = parseInt(req.query.offset);
    const idols = await IdolModel.findAll({ limit, offset });
    res.status(200).json({ meta: { limit, offset, count: idols.length }, data: idols });
  } catch (err) {
    next(err);
  }
};
