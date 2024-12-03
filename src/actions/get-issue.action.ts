import { githubApi } from "../api"
import { sleep } from "../helpers";
import { Issue } from "../issues/interfaces"

export const getIssue = async (issueNumber: number): Promise<Issue | undefined> => {

    // await sleep(2000);

    const {data} = await githubApi.get<Issue>(`/issues/${issueNumber}`)

    return data;
}