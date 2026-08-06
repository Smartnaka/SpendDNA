import { createUploadthing, type FileRouter } from "uploadthing/next";
const f = createUploadthing();
export const uploadRouter = { statementUploader: f({ pdf: { maxFileSize: "8MB" }, text: { maxFileSize: "4MB" } }).onUploadComplete(async ({ file }) => ({ uploadedBy: "authenticated-user", fileName: file.name })) } satisfies FileRouter;
export type UploadRouter = typeof uploadRouter;
