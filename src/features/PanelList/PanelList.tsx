import React from "react";
import { Cell, Group, Panel, Separator, SplitCol } from "@vkontakte/vkui";
import { PanelListProps } from "../../types/types";


export const PanelList: React.FC<PanelListProps> = ({ panel, setPanel, panels }) => {
  return (
    <SplitCol width={280} maxWidth={280} style={{marginTop: 50}}>
    <Panel id='panelList'>
      <Group>
        {panels.map((item, i) => (
          <React.Fragment key={i}>
            <Cell key={i} activated={item === panel} onClick={() => setPanel(item)}>
              {item}
            </Cell>
            {i !== panels.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </Group>
    </Panel>
  </SplitCol>
  )
}

export default PanelList;