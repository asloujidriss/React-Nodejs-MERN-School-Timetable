import http from "./AxiosContext";

const getAll = () => {
  return http.get("/enseignant/getAll");
};

const create = data => {
  console.log(data)
  return http.post("/enseignant/register",data);
};
const get = id => {
  return http.get(`/enseignant/getbyID/${id}`);
};
const getlisteClasse = id => {
  return http.get(`/enseignant/getlisteClasse/62682b6752e60fcff82d0f40`);
};
const update = (id, data) => {
  console.log(data)
  return http.put(`/enseignant/update/${id}`,data);
};
const remove = _id => {
  return http.delete(`/enseignant/delet/${_id}`);
};

export default {
  getAll,
  create,
  get,
  getlisteClasse,
  update,
  remove
};








