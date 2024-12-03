import { useQuery } from "@tanstack/react-query"
import { getIssue } from "../../actions"
import { getIssueComments } from "../../actions/get-issue-comments.action"

export const useIssue = (issueNumber: number) => {
    const issueQuery = useQuery({
        queryKey: ['issue', issueNumber],
        queryFn: () => getIssue(issueNumber),
        staleTime: 1000 * 60 * 60,
    })

    const issueCommentsQuery = useQuery({
        queryKey: ['issue', issueQuery.data?.number, 'comments'],
        queryFn: () => getIssueComments(issueQuery.data!.number),
        staleTime: 1000 * 60 * 60,
        enabled: issueQuery.data !== undefined,
    })

    return {
        issueQuery,
        issueCommentsQuery,
    }
}
