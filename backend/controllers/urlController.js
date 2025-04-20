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
    static async getUrls(req, res) {
        try {

            const { shortCode } = req.params;
            const entry = await Url.findOne({ shortCode });
            if (!entry) return res.status(404).json("Not Found");

            entry.accessCount++;
            await entry.save();
            const response = entry.toObject();
            // @ts-ignore
            delete response.accessCount;

            return res.send(response);
        } catch (err) {
            return res.send(err.message);
        }
    }

    static async updateUrls(req, res) {
        try {

            const { shortCode } = req.params;
            const { url } = req.body;
            const entry = await Url.findOne({ shortCode });

            if (!entry) {
                return res.status(404).json('Short Code not Found');
            }
            if (!url) {
                return res.status(400).json('New URL is required');
            }
            entry.url = url;
            entry.updatedAt = new Date();
            await entry.save();
            const response = entry.toObject();
            // @ts-ignore
            delete response.accessCount;
            return res.status(200).json(response);
        } catch (err) {
            return res.send(err.message);
        }
    }



}

module.exports = { UrlController }