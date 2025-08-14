import { useCallback, useState } from "react";
import {
  type Tab, type ResultType, type Ternary, type Binary,
  type PresentKeys, type AbsentKeys
} from "../types";

const DEFAULT_PRESENT: Record<PresentKeys, Ternary> = {
  health: "", meal: "", cognition: "", comm: "",
};
const DEFAULT_ABSENT: Record<AbsentKeys, Binary> = {
  tried3Calls: "", checkedNeighbors: "", mailsPiled: "", guidedToCenter: "",
};

export function useCarePostState() {
  const [tab, setTab] = useState<Tab>("emergency");
  const [resultType, setResultType] = useState<ResultType>("present");
  const [present, setPresent] = useState(DEFAULT_PRESENT);
  const [absent, setAbsent] = useState(DEFAULT_ABSENT);
  const [call, setCall] = useState(DEFAULT_PRESENT);

  const reset = useCallback(() => {
    setPresent(DEFAULT_PRESENT);
    setAbsent(DEFAULT_ABSENT);
    setCall(DEFAULT_PRESENT);
    setResultType("present");
  }, []);

  return {
    tab, setTab,
    resultType, setResultType,
    present, setPresent,
    absent, setAbsent,
    call, setCall,
    reset,
  };
}
