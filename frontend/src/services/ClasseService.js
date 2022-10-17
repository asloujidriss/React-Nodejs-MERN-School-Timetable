import http from "./AxiosContext";

const getAllC = () => {
  return http.get("/classe/getall");
};

const get = id => {
    return http.get(`/classe/getbyID/${id}`);
  };

  const getS = section => {
    return http.get(`/classe/getbySection/${section}`);
  }; 

  const getSectionAndNiveau = (section,niveau) => {
     //return http.get(`/classe/getSectionAndNiveau/${section}&${niveau}`);
     return http.get(`/classe/getSectionAndNiveau/Economie et gestion&4eme`);
  }; 

const create = data => {
  console.log(data)
  return http.post("/classe/create",data);
};

const update = (id, data) => {
  console.log(data)
  return http.put(`/classe/updete/${id}`,data);
};

const remove = _id => {
  return http.delete(`/classe/delet/${_id}`);
};

export default {
  getAllC,
  get,
  getS,
  create,
  update,
  remove,
  getSectionAndNiveau
};
