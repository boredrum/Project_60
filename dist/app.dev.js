"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _os = require("os");

var _index = require("./index.js");

var _fs = _interopRequireWildcard(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Excercise 1
// fs.writeFile('data.json', JSON.stringify({users}, null, 2), err => {
//     if (err){
//         console.error(err);
//     }else{
//         console.log ('Data written to file');
// }});
// Excercise 2
var filePath = _path["default"].join((0, _os.homedir)(), 'data.json');

_fs["default"].writeFile(filePath, JSON.stringify({
  users: _index.users
}, null, 2), function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log('Data written on disc');
  }
}); // Excercise 4, 5


var isExist = function isExist(filePath) {
  return regeneratorRuntime.async(function isExist$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_fs["default"].promises.stat(filePath));

        case 3:
          console.log("File exists");
          return _context.abrupt("return", true);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log("File doesn't exist", _context.t0);
          return _context.abrupt("return", false);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // async function updateData () {
//     if (await isExist(filePath)){
//         await promises.appendFile('data.json', JSON.stringify({newData}, null, 2), err => {
//             if (err){
//                 console.log(err);
//             }else{
//                 console.log('Appended file with new Data in file');
//             }
//         });
//         await promises.appendFile(filePath, JSON.stringify({newData}, null, 2), err => {
//             if (err){
//                 console.log(err);
//             }else{
//                 console.log('Appended file with new Data on Disc');
//             }
//         });
//     }
// }
// Another way to make it:
// async function updateData () {
//     if (await isExist(filePath)){
//         fs.readFile(filePath, (err, data) => {
//             if (err){
//                 console.log(err);
//             }else{
//                 const recentData = JSON.parse(data);
//                 const updatedData = {users: [...recentData.users, ...newData]};
//                 fs.writeFile('data.json', JSON.stringify(updatedData, null, 2), err => {
//                     if (err){
//                         console.error(err);
//                     }else{
//                         console.log ('Appended file with new Data in file');
//                 }});
//                 fs.writeFile(filePath, JSON.stringify(updatedData, null, 2), err => {
//                     if (err){
//                         console.log(err);
//                     }else{
//                         console.log('Appended file with new Data on Disc');
//                     }
//                 })
//             }
//         })
//     }
// }