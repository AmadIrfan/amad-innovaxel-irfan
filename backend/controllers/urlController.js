const nanoid = require("nanoid");
const { Url } = require("../models/urlModels");


class UrlController {

    static async addUrl(req, res) {

        try {

            const { url } = req.body;
            if (!url) return res.status(400).json({ error: 'URL is required' });

            const shortCode = nanoid.nanoid(6);
            const newEntry = new Url({ url, shortCode });
            await newEntry.save();
            const response = newEntry.toObject();
            // @ts-ignore
            delete response.accessCount;
            return res.status(201).json(response);

        } catch (err) {
            return res.send(err.message)
        }
    }

}

module.exports = { UrlController }