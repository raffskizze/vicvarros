import express from 'express';

const router = express.Router();

/**
 * GET users listing
 */

router.get('/', (req, res) => {
  res.json({
    response: 'GET index',
  });
});

export default router;
