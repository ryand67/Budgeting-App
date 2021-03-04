import axios from 'axios';

export default {
     getSetAllTransactions(setTransactions)  {
        axios.get('/api/transactions/getAll')
        .then(res => {
          setTransactions(res.data);
        })
      },

      insertTransaction(entry, cb) {
        axios.post('/api/transactions/create', entry).then(res => {
            cb();
        })
      }
}