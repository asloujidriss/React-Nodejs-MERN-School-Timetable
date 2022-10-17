import http from "./AxiosContext";

const getAll = () => {
  return http.get("/emploi/getallC");
};
const get = id => {
  return http.get(`/emploi/getbyID/${id}`);
};

const create = data => {
  console.log(data)
  return http.post("/emploi/create",data);
};

const update = (id, data) => {
  console.log(data)
  return http.put(`/emploi/updete/${id}`,data);
};

const remove = _id => {
  return http.delete(`/emploi/delet/${_id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove
}