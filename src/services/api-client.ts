import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export { axiosInstance };

class ApiClient<T extends { id: number }> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll() {
    return axiosInstance.get<T[]>(this.endpoint);
  }

  create(data: T) {
    return axiosInstance.post(this.endpoint, data);
  }

  update(data: T) {
    return axiosInstance.put(this.endpoint + "/" + data.id, data);
  }

  delete(id: number) {
    return axiosInstance.delete(this.endpoint + "/" + id);
  }
}

export default ApiClient;
