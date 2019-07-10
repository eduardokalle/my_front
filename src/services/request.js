    
import instance from './instance';

export async function getRequest() {
  return instance.get("/requests")
}

export async function deleteRequest(id) {
  return instance.get("/delete.json");
}

export async function save(data) {
  return instance.post("/request/create", data);
}

export async function getById(id) {
  return instance.get("/request.json");
}