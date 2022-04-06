/* eslint-disable no-unreachable */
export default function handleResponseFromAPI(promise) {
  if (promise) {
    Promise.resolve({
      status: 200,
      body: 'Success',
    });
  }
  // eslint-disable-next-line no-unused-vars
  promise.then((result) => {
    console.log('Got a response from the API', result);
  });
  // eslint-disable-next-line no-unused-vars
  promise.catch((error) => {
    console.log('Got a response from the API');
  });
}
