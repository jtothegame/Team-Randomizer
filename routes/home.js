const Express = require('express');
const router = Express.Router();
const shuffle = require('shuffle-array');

const namePicker = function(names,number) {
  teamSize = number;
  namesArray = names.split(', ');
  shuffled = shuffle(namesArray);
  newNames = [];
  while(shuffled.length) {
    innerArray = [];
    for(let i = 0; i < teamSize; i++) {
      if(shuffled[0]!== undefined)
        innerArray.push(shuffled[0])
      shuffled.shift();
    }
    newNames.push(innerArray);
  }
  console.log(newNames);
  return newNames;
}

router.get('/', function(request, respond) {
  respond.render('index', { pick: '', names: '', method: '' });
})

router.post('/', function (req, res, next) {
  const {names} = req.body;
  const {number} = req.body;
  console.log(req.body);

  res.render('index', { pick: namePicker(names,number), names });
})

module.exports = router;
