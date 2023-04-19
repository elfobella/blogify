import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "./server/api/root";

type RouterOutputs = inferRouterOutputs<AppRouter>;
type allBlogsOutput = RouterOutputs["blog"]["every"];

export type Blog = allBlogsOutput[number];
