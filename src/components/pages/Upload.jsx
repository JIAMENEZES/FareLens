import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Textarea } from "../ui/textarea";

import { DropDownSelect } from "../DropDownSelect";

const Upload = () => {
  return (
    <div className="w-[600px] flex mx-auto flex-col mt-10">
      <h1 className="text-3xl font-bold text-left">
        Upload AI Model or Dataset
      </h1>
      <p className="mt-2 text-md font-semibold text-[#555d6b]">
        Upload Your AI models or datasets for comprehensive governance analysis
      </p>

      <Card className="w-full bg-[rgb(2, 8, 24)] text-white mt-5">
        <CardHeader>
          <CardTitle className="text-2xl">File Upload</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2 w-full">
                <label htmlFor="fileType">File Type</label>
                <DropDownSelect />
              </div>

              <div className="grid gap-2">
                <label htmlFor="desc">Description (Optional)</label>
                <Textarea />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Upload;
