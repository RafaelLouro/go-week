const Tweet = require('../model/Tweet');

module.exports = {
    async index(req, res) {
        // pode ter filtro {} nesse find, pesquisar depois
        // no sort, o '-' é para ser desc em vez de asc
        const tweets = await Tweet.find().sort('-createdAt');

        return res.json(tweets);
    },
    async store(req, res) {
        const tweet = await Tweet.create(req.body);

        req.io.emit('tweet', tweet);

        return res.json(tweet);
    },
}