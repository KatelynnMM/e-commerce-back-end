// category-routes.js

const router = require('express').Router();
const { Category, Product } = require('../../models');

// GET all categories with associated products
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET a single category by id with associated products
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!category) {
      res.status(404).json({ message: 'Category not found with this id' });
      return;
    }

    res.json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// POST a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// PUT update a category by id
router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatedCategory[0]) {
      res.status(404).json({ message: 'Category not found with this id' });
      return;
    }

    res.json(updatedCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// DELETE a category by id
router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedCategory) {
      res.status(404).json({ message: 'Category not found with this id' });
      return;
    }

    res.json(deletedCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;

