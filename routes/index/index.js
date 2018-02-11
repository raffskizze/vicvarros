import express from 'express';

const router = express.Router();

/**
 * GET index listing
 */
router.get('/', (req, res) => {
  res.json({
    response: 'GET index',
  });
});

export default router;
