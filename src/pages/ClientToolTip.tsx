import { TreeNodeDatum } from 'react-d3-tree';
import Card from 'react-bootstrap/Card';

type props = {
  treeNode: TreeNodeDatum;
  display: boolean;
};

export function ClientToolTip({ treeNode, display }: props) {
  console.log(treeNode);
  if (!display) {
    return <div></div>;
  }
  return (
    <foreignObject x="20" y="20" width="160" height="160">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Name:{treeNode.name}</Card.Title>
          <Card.Text>CosNumber: {treeNode.attributes?.cosNumber}</Card.Text>
          <Card.Text>Grade: {treeNode.attributes?.grade}</Card.Text>
          <Card.Text>Ctl: {treeNode.attributes?.ctl}</Card.Text>
          <Card.Text>BehaviourSegment: {treeNode.attributes?.behaviourSegment}</Card.Text>
          <Card.Text>Address: {treeNode.attributes?.address}</Card.Text>
          <Card.Text>Email: {treeNode.attributes?.email}</Card.Text>
          <Card.Text>Bid: {treeNode.attributes?.bid}</Card.Text>
        </Card.Body>
      </Card>
    </foreignObject>
  );
}
