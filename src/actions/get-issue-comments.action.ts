import { githubApi } from "../api"
import { Comment } from "../issues/interfaces";

export const getIssueComments = async (issueNumber: number ): Promise<Comment[]> => {

    const {data} = await githubApi.get<Comment[]>(`/issues/${issueNumber}/comments`)

    return data;
}