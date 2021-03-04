import axios from "axios";

export default {
  async getSetAllTransactions(setTransactions, setTotal) {
    axios.get("/api/transactions/getAll").then((res) => {
      setTransactions(res.data);
      let holder = 0;
      res.data.map((item) => {
        holder += item.amount;
      });
      setTotal(holder);
      return;
    });
  },

  async insertTransaction(entry) {
    axios.post("/api/transactions/create", entry).then((res) => {
      return res.data;
    });
  },

  async deleteTransaction(id) {
      axios.delete(`/api/transactions/delete?id=${id}`)
        .then(res => {
            console.log(res);
        })
  }
};
