const mongoose = require('mongoose');
const History = require('../models/History');
const Data = require('../models/Data');
const ErrorResponse = require('../utils/errorResponse');
const io = require('socket.io');

// const historyChangeStream = History.watch();

// historyChangeStream.on('change', (change) => {
//   console.log(change);
//   io.emit('new-History', change);
// });

const getData = async (req, res, next) => {
  const history = await History.find();
  const data = await Data.find();
  res.status(200).json({ success: true, history: history, data: data });
};

const getUsers = (req, res, next) => {};

const getSettings = (req, res, next) => {};

module.exports = { getData, getUsers, getSettings };
