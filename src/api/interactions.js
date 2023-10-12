import { client } from "../utils/fetch";

export const getInteractions = () => {
  return client.get();
}