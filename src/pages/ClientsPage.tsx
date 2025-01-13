import { orgChart } from '../data/clients';
import { Tree, TreeNodeDatum, SyntheticEventHandler } from 'react-d3-tree';
import * as Icon from 'react-bootstrap-icons';
import { HierarchyPointNode } from 'd3-hierarchy';
import { SyntheticEvent, useRef } from 'react';
import { ClientToolTip } from './ClientToolTip';

type props = {
  nodeDatum: TreeNodeDatum;
  toggleNode: () => void;
  onNodeMouseOver: SyntheticEventHandler;
  onNodeMouseOut: SyntheticEventHandler;
};
const containerStyles = {
  width: '100vw',
  height: '100vh',
};

const renderRectSvgNode = ({ nodeDatum, toggleNode, onNodeMouseOver, onNodeMouseOut }: props) => (
  <g>
    <rect width="20" height="20" x="-10" onClick={toggleNode} />
    {nodeDatum.children ? (
      <Icon.Apple
        height="20"
        x="-10"
        width="20"
        onClick={toggleNode}
        color="tomato"
        onMouseEnter={onNodeMouseOver}
        onMouseLeave={onNodeMouseOut}
      />
    ) : (
      <Icon.Person height="20" x="-10" width="20" />
    )}
    <text fill="black" strokeWidth="1" x="15">
      {nodeDatum.name}
    </text>
  </g>
);

const onNodeMouseOverEventHandler = (
  nodeData: HierarchyPointNode<TreeNodeDatum>,
  event: SyntheticEvent,
) => {
  console.log(nodeData.data);
  <ClientToolTip treeNode={nodeData.data} display={true} />;
};

const onNodeMouseOutEventHandler = (
  nodeData: HierarchyPointNode<TreeNodeDatum>,
  event: SyntheticEvent,
) => {
  console.log(nodeData.data);
  <ClientToolTip treeNode={nodeData.data} display={false} />;
};

export function ClientsPage() {
  let containerRef = useRef<HTMLDivElement>(null);
  let clientRect = containerRef.current?.getBoundingClientRect();
  let height = clientRect?.height ?? 100;
  let width = clientRect?.width ?? 100;
  let translate = { x: width / 2, y: height / 2 };

  return (
    <div style={containerStyles} ref={containerRef}>
      <Tree
        data={orgChart}
        orientation="horizontal"
        //dimensions={dimensions}
        translate={translate}
        renderCustomNodeElement={renderRectSvgNode}
        onNodeMouseOver={onNodeMouseOverEventHandler}
        onNodeMouseOut={onNodeMouseOutEventHandler}
        initialDepth={2}
        zoom={0.5}
      />
    </div>
  );
}
