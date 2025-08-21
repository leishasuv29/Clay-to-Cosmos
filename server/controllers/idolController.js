import IdolModel from '../models/idolModel.js'

export const getAllIdols = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit, 50);
    const offset = parseInt(req.query.offset, 0);
    const idols = await IdolModel.findAll({ limit, offset });
    res.json({ meta: { limit, offset, count: idols.length }, data: idols });
  } catch (err) {
    next(err);
  }
};
