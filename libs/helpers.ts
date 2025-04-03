import { unstable_ViewTransition } from "react";

export const ViewTransition = unstable_ViewTransition;

export const isGithubPages = Boolean(process.env.IS_GITHUB_PAGES ?? false);
