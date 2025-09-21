import React, { useMemo, useState } from "react";
import { MANAGERS } from "./datas/mock";
import type { ManagerType } from "./types";
import {
  LeftPane,
  Page,
  RightPane,
  Wrap,
} from "./index.styles";
import { LeftPaneComponent, RightPaneComponent } from "./components";

export const Manager: React.FC = () => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string>(MANAGERS[0].id);

  const filtered: ManagerType[] = useMemo(
    () => MANAGERS.filter((m: any) => m.name.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  const selectedManager =
    filtered.find((m) => m.id === selected) ?? filtered[0] ?? MANAGERS[0];

  return (
    <Page>
      <Wrap>
        <LeftPane>
          <LeftPaneComponent
            query={query}
            setQuery={setQuery}
            filtered={filtered}
            selectedManager={selectedManager}
            setSelected={setSelected}
          />
        </LeftPane>
        <RightPane>
          <RightPaneComponent />
        </RightPane>
      </Wrap>
    </Page>
  );
};

export default Manager;
