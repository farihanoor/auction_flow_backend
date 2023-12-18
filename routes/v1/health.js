const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
  res.status(400).json('System running Ok');
});

module.exports = router;
