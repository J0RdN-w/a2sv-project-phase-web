const app = require("express")();
const axios = require("axios").default;
const port = 7000;
const baseUrl = "https://jsonplaceholder.typicode.com/";
const paths = ["posts", "users", "todos"];

// GET
axios
  .get(baseUrl + "posts?userId=1")
  .then((resp) => {
    console.log(resp.data);
  })
  .catch((err) => {
    console.log("Ops! something went wrong.");
  })
  .finally(() => {
    console.log("---GET END---");
  });

// POST
axios
  .post(
    baseUrl + "posts",
    {
      userId: 1,
      id: 0,
      title: "new data",
      body: "new data corporis harum nihil quis provident sequi\n",
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  .then((resp) => {
    console.log(resp.data);
  })
  .catch((err) => {
    console.log("Ops! something went wrong.");
  })
  .finally(() => {
    console.log("---POST END---");
  });

// PATCH
axios
  .patch(
    baseUrl + "posts/1",
    {
      userId: 1,
      id: 0,
      title: "updated data",
      body: "updated data corporis harum nihil quis provident sequi\n",
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  .then((resp) => {
    console.log(resp.data);
  })
  .catch((err) => {
    console.log("Ops! something went wrong.");
  })
  .finally(() => {
    console.log("---PATCH END---");
  });

// DELETE
axios
  .delete(baseUrl + "posts/1", {
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((resp) => {
    console.log("dfdf");
  })
  .catch((err) => {
    console.log("Ops! something went wrong.");
  })
  .finally(() => {
    console.log("---DELETE END---");
  });


app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
