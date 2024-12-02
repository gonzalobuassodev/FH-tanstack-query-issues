import { useQuery } from '@tanstack/react-query';
import { getLabels } from '../../actions';
import { Labels } from '../interfaces';

export const useLabels = () => {
    const labelsQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabels,
        // staleTime: 1000 * 60 * 60,
        // placeholderData: [
        //     {
        //         id: 791921801,
        //         node_id: 'MDU6TGFiZWw3OTE5MjE4MDE=',
        //         url: 'https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F',
        //         name: '❤️',
        //         color: 'ffffff',
        //         default: false,
        //         description: null
        //     } satisfies Labels,
        //     {
        //         id: 139653724,
        //         node_id: 'MDU6TGFiZWwxMzk2NTM3MjQ=',
        //         url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Core%20Utilities',
        //         name: 'Component: Core Utilities',
        //         color: 'c5def5',
        //         default: false,
        //         description: null
        //     } satisfies Labels
        // ]
        initialData: [
            {
                id: 791921801,
                node_id: 'MDU6TGFiZWw3OTE5MjE4MDE=',
                url: 'https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F',
                name: '❤️',
                color: 'ffffff',
                default: false,
                description: null
            } satisfies Labels,
            {
                id: 139653724,
                node_id: 'MDU6TGFiZWwxMzk2NTM3MjQ=',
                url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Core%20Utilities',
                name: 'Component: Core Utilities',
                color: 'c5def5',
                default: false,
                description: null
            } satisfies Labels
        ]
    });

    return {
        labelsQuery
    };
};
