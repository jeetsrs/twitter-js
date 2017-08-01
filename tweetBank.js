const _ = require('lodash');
let data = [];

function add(name, content) {
  data.push({
    name: name,
    content: content
  });
}

function list() {
  //Note: these are from lodash
  return _.cloneDeep(data);
}

function find(properties) {
  //Note: these are from lodash
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = {
  add: add,
  list: list,
  find: find
};


const randArrayEl = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function () {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  // return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
  return randArrayEl(fakeFirsts);
};

const getFakeTweet = function () {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (let i = 0; i < 10; i++) {
  module.exports.add(getFakeName(), getFakeTweet());
}

let tmp = function (name) {
  let compareVar;
  for (var index = 0; index < data.length; index++) {
    // var element = array[index];
    compareVar = data[index].name.split(" ")[0];
    if (name === compareVar) return (name, ' found in ', data[index].name);
  }
  return console.log('not found');

  // (name in compareVar ) ? console.log(name, ' found in ', data.name): console.log('not found');
  // return ('ran the tmp search...');
}


// console.log(data);
console.log(find({'name': 'Omri'}));
