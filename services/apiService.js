const API_BASE_URL = 'http://localhost:3000';

export const apiService = {
  // Obtener datos del home
  async getHomeData() {
    try {
      const response = await fetch(`${API_BASE_URL}/`);
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('❌ Error fetching home data:', error);
      throw error;
    }
  },
};