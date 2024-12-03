import { githubApi } from "../api";
import { sleep } from "../helpers";
import { Issue } from "../issues/interfaces";

export const getIssues = async (): Promise<Issue[]> => {

    await sleep(2000);

    const {data} = await githubApi.get<Issue[]>(`/issues`);

    return data;

}