import apiClient from "@/utils/api-client";
import { useRequest } from "ahooks";

type UploadError = {
  message: string;
  errorCode: string;
};

type UploadData = {
  name: string;
  size: number;
  mimetype: string;
  path: string;
};

type UploadResponse = {
  message: string;
  data: UploadData;
};

export default function useUpload() {
  return useRequest(
    (data: FormData) =>
      apiClient.post<UploadError, UploadResponse>("/files/image", data),
    { manual: true }
  );
}
