const chai = require('chai');

const chaiXml = require('chai-xml');
const chaiDatetime = require('chai-datetime');
const dirtyChai = require('dirty-chai');
global.verquire = require('../utils/verquire');

chai.use(chaiXml);
chai.use(chaiDatetime);
chai.use(dirtyChai);

