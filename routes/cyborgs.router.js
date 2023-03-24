const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const CyborgsService = require('../services/cyborgs.service');
const cyborgs = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'cyborgs.json')));
const service = new CyborgsService;

// Ruta General, Todos los Cyborgs 
router.get('/', async (req, res) => {
  const cyborgs = await service.find();
  res.json(cyborgs);
});

// Obtener información por ID
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const cyborg = await service.findOne(id);
  res.json(cyborg);
});

router.get('/:id/name', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const cyborg = await service.findOne(id);

    if (!cyborg) {
      res.status(404).send('Cyborg not found');
    } else {
      res.json({ name: cyborg.name });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
  router.get('/:id/weapon', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const cyborg = await service.findOne(id);
      if (!cyborg) {
        res.status(404).send('Cyborg not found');
      } else {
        res.json({ weapon: cyborg.weapon });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  router.get('/:id/location', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const cyborg = await service.findOne(id);
      if (!cyborg) {
        res.status(404).send('Cyborg not found');
      } else {
        res.json({ location: cyborg.location });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  router.get('/:id/special_power', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const cyborg = await service.findOne(id);
      if (!cyborg) {
        res.status(404).send('Cyborg not found');
      } else {
        res.json({ special_power: cyborg.special_power });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  router.get('/:id/strengths', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const cyborg = await service.findOne(id);
      if (!cyborg) {
        res.status(404).send('Cyborg not found');
      } else {
        res.json({ strengths: cyborg.strengths });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }); 

  router.get('/:id/weaknesses', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const cyborg = await service.findOne(id);
      if (!cyborg) {
        res.status(404).send('Cyborg not found');
      } else {
        res.json({ weaknessess: cyborg.weaknesses });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  router.get('/:id/image', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const cyborg = await service.findOne(id);
      if (!cyborg) {
        res.status(404).send('Cyborg not found');
      } else {f
        res.json({ image: cyborg.image });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // Post
  router.post('/', (req, res) => {
    const body = req.body;
    const newCyborg = service.create(body);
    res.status(201).json(newCyborg);
  });
  
  router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const cyborgs = service.update(id, body);
    res.json(cyborgs);
  });
  
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const rta = service.delete(id);
    res.json(rta);
  });
  
  

  module.exports = router;