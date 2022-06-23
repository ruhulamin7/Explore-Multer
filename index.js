const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

const upload = multer({ dest: path.join(__dirname, './assets/') });
// -----------------upload single file with single input field
//
// app.post('/form-data', upload.single('profilePhoto'), (req, res, next) => {
//   console.log(req.file);
// res.send('File Uploaded Successfully');
// });
// ----------upload multiple files with single input field
//
// app.post('/form-data', upload.array('profilePhoto', 2), (req, res, next) => {
//   try {
//     console.log(req.files);
//     console.log(req.body);
//     res.send('File Uploaded Successfully');
//   } catch (err) {
//     res.send('File Upload Error');
//   }
// });

//---------------for multipart upload and many types of quantities --------------------

// const cpUpload = upload.fields([
//   { name: 'profilePhoto', maxCount: 2 },
//   { name: 'coverPhoto', maxCount: 1 },
// ]);

// app.post('/form-data', cpUpload, (req, res, next) => {
//   console.log(req.body);
//   console.log(req.files?.['profilePhoto']);
//   res.send('File Uploaded Successfully');
// });

//-------only for text files upload and store in the file system--------

// app.post('/form-data', upload.none(), (req, res, next) => {
//   const data = req.body;
//   fs.writeFile(
//     path.join(__dirname, 'uploads/data.json'),
//     JSON.stringify(data),
//     (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send('success');
//       }
//     }
//   );
//   res.send('File Uploaded Successfully');
// });
//-------------only for text files-----------------------
//
// app.post('/form-data', upload.none(), (req, res, next) => {
//   console.log(req.body);
//   res.send('File Uploaded Successfully');
// });

//----------for any types of files you want to upload---------------
//
// app.post('/form-data', upload.any(), (req, res, next) => {
//   console.log(req.body);
//   console.log(req.files);
//   res.send('File Uploaded Successfully');
// });

app.listen(5000, () => console.log('server is running on port 5000'));
