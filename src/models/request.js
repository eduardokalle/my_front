import { getRequest, getById, save as saveRequest } from '../services/request'

const request = {
  state: {
    requests:[],
    loading: false,
    request: {},
  },
  effects: {
    async getRequests() {
      try {
        this.setLoading(true);
        const list = await getRequest();
        this.setRequests(list.data);
      }catch(err){
        console.log(err.toString());
      }
    },
    async getById(id) {
      try {
        this.setLoading(true);
        const request = await getById(id);
        this.setRequest(request);
      } catch (err) {
        console.log(err.toString());
      }
    },
    async delete(id) {
      try {
        this.setLoading(true);
        this.setDelete(id);
      } catch (err) {
        console.log(err.toString());
      }
    },
    async save({values, onSaved}) {
      try {
        this.setLoading(true);
        const request = await saveRequest(values);
        const { data } = await request;
        onSaved();  
      } catch (err) {
        console.log(err.toString());
      }
    },
  },
  reducers: {
    setRequests: (state, requests) => ({
      ...state,
      loading: false,
      requests
    }),

    setLoading: (state, loading) =>({
      ...state,
      loading
    }),

    setRequest: (state, request) =>({
      ...state,
      loading: false,
      request
    }),

    setDelete: (state, id) => {
      state.requests = state.requests.filter(item => item.id !== id);
      return {
        ...state,
        loading: false,
      }
    },

    save: (state, data) => {
      state.requests = [...state.requests, data];
      return {
        ...state,
        loading: false,
      }
    }
  }
};

export default request;