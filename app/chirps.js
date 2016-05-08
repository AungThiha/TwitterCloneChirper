var router = require('express').Router();
var login = require('./login');

var db = new (require('locallydb'))('./.data');
var chirps = db.collection('chirps');

function getChirp(req, res){
  res.json(chirps.toArray());
}

function postChirp(req, res) {
  var chirp = req.body;
  chirp.userId = req.user.cid;

  // TO BE REMOVED
  chirp.username = req.user.username;
  chirp.fullname = req.user.fullname;
  chirp.email = req.user.email;

  var id = chirps.insert(chirp);
  res.json(chirps.get(id));
}

router.route('/api/chirps')
  .all(login.required)
  .get(getChirp)
  .post(postChirp);

module.exports = router;