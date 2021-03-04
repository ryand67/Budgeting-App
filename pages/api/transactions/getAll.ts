import connect from '../../../util/db';

export default async (req, res) => {
    const { db } = await connect();

    try {
        const result = await db.collection('transactions').find().toArray();
        res.json(result);
    } catch (error) {
        res.json(error);
    }
    
}