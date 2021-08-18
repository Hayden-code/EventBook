import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_EVENT } from "../utils/queries";

export default function EventPage() {
  const { eventId } = useParams();
  const { loading, error, data } = useQuery(QUERY_EVENT, {
    variables: { eventId: eventId },
  });
  if (loading) {
    document.body.style.cursor = "progress";
  } else {
    document.body.style.cursor = "default";
  }

  console.log(data);

  console.log(error);
  return (
    <div>
      <h1>event route</h1>
    </div>
  );
}
