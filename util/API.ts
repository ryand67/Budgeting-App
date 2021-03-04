import axios from 'axios';

export default {
     getSetAllTransactions(setTransactions)  {
        axios.get('/api/transactions/getAll')
        .then(res => {
          setTransactions(res.data);
        })
      }
}