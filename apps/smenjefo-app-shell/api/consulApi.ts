import api from "./api";

// TODO: service discovery implementation
export const getServiceDiscoveryRegistry = () => {
  return api.get('/v1/catalog/nodes');
};
