import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
          <CardTitle>File Upload</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <label htmlFor="password">Password</label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <button type="submit" className="w-full">
            Login
          </button>
          <button variant="outline" className="w-full">
            Login with Google
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Upload;
