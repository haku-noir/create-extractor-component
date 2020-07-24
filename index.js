const getSrcDir = dir => {
  let srcDir = `${dir}/src`;

  dir.split('/').forEach((dirItem, index) => {
    if(dirItem === 'src')
      srcDir = dir.split('/').slice(0, index).join('/') + '/src';
  });

  return srcDir;
};

module.exports = () => {
  const srcDir = getSrcDir(process.cwd());

  Promise.resolve()
    .then(() => console.log('create-extractor-component'))
    .then(() => console.log(srcDir))
    .catch(err => {
      console.log('Fail!');
      console.error(err)
    });
};
