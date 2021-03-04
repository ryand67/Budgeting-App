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
    });
  },

  async insertTransaction(entry) {
    axios.post("/api/transactions/create", entry).then((res) => {
      return res.data;
    });
  },
};
