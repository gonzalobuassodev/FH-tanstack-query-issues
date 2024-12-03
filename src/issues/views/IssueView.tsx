import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { IssueComment } from '../components/IssueComment';
import { FiSkipBack } from 'react-icons/fi';
import { useIssue } from '../hooks';
import { LoadingSpinner } from '../../shared';

export const IssueView = () => {
    const params = useParams();
    const issueNumber = Number(params.issueNumber);
    const { issueQuery, issueCommentsQuery } = useIssue(issueNumber ?? 0);
    const navigate = useNavigate();

    if (issueQuery.isLoading) return <div>Loading...</div>;

    if (!issueQuery.data) return <Navigate to='/404' />;

    console.log(issueQuery.data.user)

    return (
        <div className="mb-5">
            <div className="mb-4">
                <button
                    onClick={() => navigate(-1)}
                    className="hover:underline text-blue-400 flex items-center">
                    <FiSkipBack />
                    Regresar
                </button>
            </div>

            {issueCommentsQuery.isLoading ? (
                <LoadingSpinner />
            ) : (
                issueCommentsQuery &&
                issueCommentsQuery.data?.map(comment => (
                    <IssueComment comment={comment} />
                ))
            )}

        </div>
    );
};
