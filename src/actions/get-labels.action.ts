import { githubApi } from "../api";
import { sleep } from "../helpers";
import { Labels } from "../issues/interfaces";

export const getLabels = async (): Promise<Labels[]> => {
    await sleep(2000);
    const { data } = await githubApi.get<Labels[]>(`/labels`);
    return data;
};