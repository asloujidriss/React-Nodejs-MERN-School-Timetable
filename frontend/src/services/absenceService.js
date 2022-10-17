import http from "./AxiosContext";

const getAll = () => {
  return http.get("/absence/getall");
};

const create = data => {
  console.log(data)
  return http.post("/absence/create",data);
};

const remove = _id => {
  return http.delete(`/absence/delet/${_id}`);
};

export default {
  getAll,
  create,
  remove
};