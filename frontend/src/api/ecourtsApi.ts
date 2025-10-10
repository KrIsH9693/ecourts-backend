import axios from "axios";
import type { CaseResult, MetaData } from "./types";

const api = axios.create({
  baseURL: "/api", // Flask backend prefix
});

export const getMetaData = async (): Promise<MetaData> => {
  const res = await api.get("/meta");
  return res.data;
};

export const getCaseDetails = async (query: Record<string, any>): Promise<CaseResult> => {
  const res = await api.post("/case", query);
  return res.data;
};

export const getLogs = async () => {
  const res = await api.get("/logs");
  return res.data;
};
