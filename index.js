module.exports = () => {
  Promise.resolve()
   .then(() => console.log('create-extractor-component'))
   .catch(err => {
     console.log('Fail!');
     console.error(err)
   });
};
