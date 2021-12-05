export const fetchData = () => {
  const commentsPromise = fetchComments();
  return {
    pokemon: thePromiseFunction(commentsPromise),
  };
};

const thePromiseFunction = (promise) => {
  let status = "hanging";
  let result;
  let suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );
  return {
    read() {
      if (status === "hanging") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

const fetchComments = () => {
  return fetch("https://jsonplaceholder.typicode.com/comments?_limit=25")
    .then((res) => res.json())
    .then((res) => res)
};