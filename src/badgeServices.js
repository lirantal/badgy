export default () => {
  return [
    {
      name: 'npm version',
      type: 'npm',
      template: (url) => {
        const {packageName} = ((url) => {
          const urlItems = url.split('/');
          const packageOwner = urlItems[urlItems.length - 2]
          const packageName = urlItems[urlItems.length - 1]

          return {
            packageOwner, packageName
          }
        })(url);

        return `[![view on npm](http://img.shields.io/npm/v/${packageName}.svg)](https://www.npmjs.org/package/${packageName})`;
      }
    },
    {
      name: 'npm license',
      type: 'npm',
      template: (url) => {
        const {packageName} = ((url) => {
          const urlItems = url.split('/');
          const packageOwner = urlItems[urlItems.length - 2]
          const packageName = urlItems[urlItems.length - 1]

          return {
            packageOwner, packageName
          }
        })(url);

        return `[![view on npm](http://img.shields.io/npm/l/${packageName}.svg)](https://www.npmjs.org/package/${packageName})`;
      }
    }

  ];
}
