"use client";
import React from "react";
import UploadFormInput from "./upload-form-input";
import { uploadSchema } from "@/lib/validation/upload-schema";

const UploadFrom = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;
    const validationFields = uploadSchema.safeParse({ file });
  };
  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
};

export default UploadFrom;
