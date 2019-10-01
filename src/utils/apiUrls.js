import { encodeQueryData } from "./commonHelpers";

export const apiGetUsers = (limit, lastId) => `http://localhost:8080/v1/users?${encodeQueryData({ limit, last_id: lastId })}`;
