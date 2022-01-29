const { Router } = require("express");
const data = require("./data.json");
const _ = require("underscore");

const router = Router();

router.get("/", (req, res) => {
  res.json(data);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  return(
    data.filter(x => x.id === id).map(x => {
      res.json(x)
    })
  )
})

router.post("/",(req, res) => {
  const {
    name,
    lastname,
    phone_number
  } = req.body;

  const newData = { ...req.body };
  if (
    name &&
    lastname &&
    phone_number
  ) {
    data.push(newData);
    res.json(data);
  } else {
    res.status(500).json({ error: "hubo un error" });
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;

  const {
    name,
    lastname,
    phone_number
  } = req.body;

  if (
    name &&
    lastname &&
    phone_number
  ) {
    _.each(data, (x, i) => {
      if (x.id === id) {
        x.company = company;
        x.type = type;
        x.logo = logo;
        x.url = url;
        x.position = position;
        x.location = location;
        x.category = category;
        x.description = description;
        x.date = date
      }
    });
    res.json(data);
  } else {
    return res.status(500).json({ error: "Hubo un error" });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  if (id) {
    _.each(data, (x, i) => {
      if (x.id == id) {
        data.splice(i, 1);
      }
    });
    res.json(data);
  }
});

module.exports = router;
