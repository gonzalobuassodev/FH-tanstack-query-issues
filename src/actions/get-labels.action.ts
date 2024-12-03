import { githubApi } from "../api";
import { sleep } from "../helpers";
import { Label } from "../issues/interfaces";

export const getLabels = async (): Promise<Label[]> => {
    // await sleep(2000);
    const { data } = await githubApi.get<Label[]>(`/labels`);
    return data;
};