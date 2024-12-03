import { githubApi } from "../api";
import { sleep } from "../helpers";
import { Issue, State } from "../issues/interfaces";

export const getIssues = async ( state: State, selectedLabels: string[]): Promise<Issue[]> => {

    await sleep(2000);

    const params = new URLSearchParams();

    if (state !== State.All){
        params.append('state', state);
    } 

    if (selectedLabels.length > 0) {
        params.append('labels', selectedLabels.join(','))
    }

    const {data} = await githubApi.get<Issue[]>(`/issues`, {
        params
    });

    return data;

}