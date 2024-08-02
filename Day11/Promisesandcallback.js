// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
      resolve("Promise resolved after 2 seconds");
  }, 2000);
});

promise1.then(message => {
  console.log(message);
});

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
      reject("Promise rejected after 2 seconds");
  }, 2000);
});

promise2.catch(error => {
  console.error(error);
});

// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const fetchData = () => new Promise(resolve => setTimeout(() => resolve("Fetched data"), 1000));
const processData = data => new Promise(resolve => setTimeout(() => resolve(`${data} processed`), 1000));
const saveData = data => new Promise(resolve => setTimeout(() => resolve(`${data} saved`), 1000));

fetchData()
  .then(data => {
      console.log(data);
      return processData(data);
  })
  .then(processedData => {
      console.log(processedData);
      return saveData(processedData);
  })
  .then(savedData => {
      console.log(savedData);
  });

// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const asyncFunction1 = async () => {
  const resolvedValue = await promise1;
  console.log(resolvedValue);
};

asyncFunction1();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const asyncFunction2 = async () => {
  try {
      await promise2;
  } catch (error) {
      console.error(error);
  }
};

asyncFunction2();

// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
const fetchDataAsync = async () => {
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
};

fetchDataAsync();

// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promise3 = new Promise(resolve => setTimeout(() => resolve("Promise 3 resolved"), 1500));
const promise4 = new Promise(resolve => setTimeout(() => resolve("Promise 4 resolved"), 2000));

Promise.all([promise1, promise3, promise4])
  .then(values => {
      console.log("Promise.all resolved values:", values);
  });

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([promise1, promise3, promise4])
  .then(value => {
      console.log("Promise.race resolved value:", value);
  });
