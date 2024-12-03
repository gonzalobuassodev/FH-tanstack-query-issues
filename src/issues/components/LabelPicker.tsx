import { LoadingSpinner } from '../../shared';
import { useLabels } from '../hooks';

interface Props {
    selectedLabels: string[];
    onLabelSelected: (label: string) => void;
}

export const LabelPicker = ({selectedLabels, onLabelSelected }: Props) => {
    const { labelsQuery } = useLabels();

    if (labelsQuery.isLoading) {
        return (
            <div className="flex justify-center items-center h-52">
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <div className="flex flex-wrap gap-2 justify-center">
            {labelsQuery.data &&
                labelsQuery.data.map(label => (
                    <span
                        key={label.id}
                        onClick={() => onLabelSelected(label.name)}
                        className={` ${ selectedLabels.includes(label.name) ? 'selected-label' : '' }
                            animate-fadeIn
                            px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer`}
                        style={{
                            border: `1px solid #${label.color}`,
                            color: '#3ffccd3'
                        }}>
                        {label.name}
                    </span>
                ))}
        </div>
    );
};
