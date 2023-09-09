const app = require("express")();
const axios = require("axios").default;
const port = 7000;
const baseUrl = "https://jsonplaceholder.typicode.com/";

// Request interceptor
const reqInterceptor = axios.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  function (error) {
    console.error(error.data);
    return Promise.reject(error);
  }
);

// Response interseptor
const resInterceptor = axios.interceptors.response.use(
  function (response) {
    console.log("Status: ", response.status);
    console.log("Data: ", response.data);
    return response;
  },
  function (error) {
    console.error(error?.data);
    return Promise.reject(error);
  }
);

// // GET
axios.get(baseUrl + "posts?userId=1").finally(() => {
  console.log("---GET METHOD[baseUrl/posts?userId=1]---");
});

// POST
axios
  .post(baseUrl + "posts", {
    userId: 1,
    id: 0,
    title: "New Data",
    body: "new data corporis harum nihil quis provident sequi\n",
  })
  .finally(() => {
    console.log("---POST METHOD[baseUrl/post]---");
  });

// PATCH
axios
  .patch(baseUrl + "posts/1", {
    userId: 1,
    id: 0,
    title: "Updated Data",
    body: "updated data corporis harum nihil quis provident sequi\n",
  })
  .finally(() => {
    console.log("---PATCH[baseUrl/posts/1]---");
  });

// DELETE
//axios.interceptors.response.eject(resInterceptor);
axios.delete(baseUrl + "posts/" + 1).finally(() => {
  console.log("---DELETE[baseUrl/posts/1]---");
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
