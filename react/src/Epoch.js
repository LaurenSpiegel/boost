import {useQuery} from "@apollo/react-hooks";
import {EpochQuery} from "./gql";
import {addCommas} from "./util";
import {Info} from "./Info";

export function Epoch(props) {
    const {data} = useQuery(EpochQuery, {
        pollInterval: 5000,
        fetchPolicy: "network-only",
    })

    if (!data) {
        return null
    }

    return (
        <div className="epoch">
            {addCommas(data.epoch.Epoch)}
            <Info invertColor={true}>Chain Height</Info>
        </div>
    )
}
