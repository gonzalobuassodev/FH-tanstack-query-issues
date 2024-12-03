import { useState } from 'react';
import { LoadingSpinner } from '../../shared';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssuesInfinite } from '../hooks';
import { State } from '../interfaces';

export const ListViewInfinite = () => {
    const [state, setState] = useState<State>(State.All);
    const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

    const onLabelSelected = (label: string) => {
        if (selectedLabels.includes(label)) {
            setSelectedLabels(selectedLabels.filter(l => l !== label));
        } else {
            setSelectedLabels([...selectedLabels, label]);
        }
    };

    const { issuesQuery } = useIssuesInfinite({
        state,
        selectedLabels
    });

    const issues = issuesQuery.data?.pages.flat() ?? [];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
            <div className="col-span-1 sm:col-span-2">
                {issuesQuery.isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        <IssueList
                            issues={issues}
                            onStateChange={setState}
                            state={state}
                        />

                        <div className="flex justify-between items-center">
                            <button
                                onClick={() => issuesQuery.fetchNextPage()}
                                disabled={issuesQuery.isFetchingNextPage}
                                className="w-full p-2 bg-blue-500 rounded-md hover:bg-blue-800 transition-all disabled:bg-gray-600">
                                    {
                                        issuesQuery.isFetchingNextPage
                                        ? 'Cargando...'
                                        : 'Carga más'
                                    }
                            </button>
                        </div>
                    </>
                )}
            </div>

            <div className="col-span-1 px-2">
                <LabelPicker
                    selectedLabels={selectedLabels}
                    onLabelSelected={onLabelSelected}
                />
            </div>
        </div>
    );
};
