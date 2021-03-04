import connect from '../../../util/db';

export default async (req, res) => {
    const { db } = await connect();
    try {
        const result = await db.collection('transactions').insertOne(req.body)
        res.status(200);
        res.end();
    } catch (error) {
        res.json(error);
        res.end();
    }
}