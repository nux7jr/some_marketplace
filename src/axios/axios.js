import axios from "axios";
export default axios.create({
  baseURL: "https://mockend.com/nux7jr/some_marketplace/",
  headers: { "Content-Type": "application/json" },
});
