import axios from "axios";

export const fetchImages = async (query, page) => {
  const response = await axios.get("https://api.unsplash.com/search/photos/", {
    params: {
      client_id: "9wXL4HljM8ZkQ5H7ZGJfpmooAOukrc0z6VemW4Xdfb0",
      query,
      page,
      per_page: 15,
      orientation: "landscape",
    },
  });
  return response;
};
