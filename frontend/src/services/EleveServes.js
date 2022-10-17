import http from "./AxiosContext";

const getAll = () => {
  return http.get("/eleve/getAll");
};

const create = data => {
  console.log(data)
  return http.post("/eleve/create",data);
};

const get = id => {
  return http.get(`/eleve/getbyID/${id}`);
};

const update = (id, data) => {
    console.log(data)
    return http.put(`/eleve/put/${id}`,data);
  };

const remove = _id => {
  return http.delete(`/eleve/delet/${_id}`);
};

export default {
  getAll,
  create,
  get,
  update,
  remove
};
