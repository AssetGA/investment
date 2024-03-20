import httpService from "./http.service";

const botEndpoint = "";

const botService = {
  get: async (payload) => {
    const { data } = await httpService.get(
      botEndpoint,
      {
        params: {
          name: `${payload.name}`,
          phone: `${payload.phone}`,
          type: `${payload.type}`,
        },
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );

    return data;
  },
};
export default botService;
