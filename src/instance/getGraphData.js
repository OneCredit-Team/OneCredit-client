import axios from "axios";

export const getGraphData = axios.create({
  baseURL: "https://82cd-211-182-230-53.jp.ngrok.io/",
});
