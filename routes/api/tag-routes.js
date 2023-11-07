const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      // be sure to include its associated Product data
      include: [{ model: Product }],
    });
    res.status(200).json(tags);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// find a single tag by its `id`
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      // be sure to include its associated Product data
      include: [{ model: Product }],
    });
  
    if (!tag) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post('/', (req, res) => {
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const delTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!delTag) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(delTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
