import http from "./AxiosContext";

const getAll = () => {
  return http.get("/user/getAll");
};
const create = data => {
  return http.post("/user/register", data);
};
const get = id => {
  return http.get(`/user/getbyID/${id}`);
};
const update = (id, data) => {
  return http.put(`/user/update/${id}`, data);
};
const remove = id => {
  return http.delete(`/user/delet/${id}`);
};
  export default {
    getAll,
    create,
    get,
    update,
    remove,
  };