import axios from "axios";

export const getGraphData = axios.create({
  baseURL:
    "https://b1cc-2001-2d8-69fe-6271-f43a-78e3-bfdf-9216.jp.ngrok.io/pyData",
});
