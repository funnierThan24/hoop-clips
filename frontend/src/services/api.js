import axios from 'axios';

const API_BASE = 'http://localhost:8000';

export const getClips = async (name) => {
  const res = await axios.get(`${API_BASE}/api/clips`, {
    params: { limit, startAfter },
  });
  return res.data;
};