const Servics = require("../models/services_model")

const services = async (req, res) => {
    try {
        const response = await Servics.find();

        if (!response) {
            res.status(404).json({ msg: "No services found " });
            return;
        }

        res.status(200).json({ msg: response });
    } catch (error) {
        console.log(`services, ${error}`);
    }
}

const search = async (req, res) => {
    const query = req.query.q;
    try {
        const items = await Servics.find({ service: { $regex: query, $options: 'i' } });
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { services, search };