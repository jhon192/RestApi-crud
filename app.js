const axios = require("axios").default;

axios("http://localhost:4000/", {
  method: "post",
  data: {
    id: "2",
    company: "newTech SRL",
    type: "IT deptament",
    logo: "index.png",
    url: "newtech.com.do",
    position: "Coder MID",
    location: "sector rico de SD",
    category: "IT",
    description: "es un buen empleo",
  },
}).then((result) => {
    console.log(result.data);
}).catch((err) => {
    console.log(err);
});
