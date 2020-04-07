import axios from "axios";
const baseUrl = "http://localhost:3001/people";

const getAllItems = () => {
  const req = axios.get(baseUrl);
  return req.then(res => res.data);
};

const createItem = newObject => {
  const req = axios.post(baseUrl, newObject);
  return req.then(res => res.data);
};

const updateItem = (id, newObject) => {
  console.log(id, newObject);
  const req = axios.put(`${baseUrl}/${id}`, newObject);
  return req.then(res => res.data);
};

const deleteItem = id => {
  const req = axios.delete(`${baseUrl}/${id}`);
  return req.then(res => res);
};

export default {
  getAllItems,
  createItem,
  updateItem,
  deleteItem
};
