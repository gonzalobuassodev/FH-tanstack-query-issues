import { useInfiniteQuery } from '@tanstack/react-query';
import { getIssues } from '../../actions';
import { Issue, State } from '../interfaces';

interface Props {
    state: State;
    selectedLabels: string[];
}

export const useIssuesInfinite = ({ state, selectedLabels }: Props) => {
    const issuesQuery = useInfiniteQuery<Issue[], Error>({
        queryKey: ['issues', 'infinite', { state, selectedLabels }],
        queryFn: ({ pageParam = 0 }) => {
            return getIssues(state, selectedLabels, pageParam as number);
        },
        staleTime: 1000 * 60 * 60,
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) =>
            lastPage.length > 0 ? pages.length + 1 : undefined
    });

    return {
        issuesQuery
    };
};
