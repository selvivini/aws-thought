const { v4: uuidv4 } = require('uuid');

const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
  
    const imageParams = {
      Bucket: 'user-images-cc827a85-e149-4d9c-bc12-b030c2a40bb3',
      Key: `${uuidv4()}.${fileType}`,
      Body: fileName.buffer,
      ACL: 'public-read' // allow read access to this file
    };
  
    return imageParams;
  };

  module.exports = params;