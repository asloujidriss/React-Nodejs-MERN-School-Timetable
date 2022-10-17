import http from "./AxiosContext";


const get = id => {
  return http.get(`/liste_classe_enseignat/getbyID/${id}`);
};

;

export default {
 
  get,

};
