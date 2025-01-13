import { Group } from '@visx/group';
import { hierarchy, Tree } from '@visx/hierarchy';
import { LinearGradient } from '@visx/gradient';
import { useForceUpdate } from '../Helpers';
import { data } from '../data/vsixData';
import { LinkHorizontal } from '@visx/shape';
import * as Icon from 'react-bootstrap-icons';

export type LinkTypesProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};
const defaultMargin = { top: 30, left: 30, right: 30, bottom: 70 };

export function VsixDemoPage({
  width: totalWidth,
  height: totalHeight,
  margin = defaultMargin,
}: LinkTypesProps) {
  const forceUpdate = useForceUpdate();
  const innerWidth = totalWidth - margin.left - margin.right;
  const innerHeight = totalHeight - margin.top - margin.bottom;
  let origin: { x: number; y: number };
  let sizeWidth: number;
  let sizeHeight: number;
  sizeWidth = innerHeight;
  sizeHeight = innerWidth;
  origin = { x: 0, y: 0 };
  console.log(`${totalWidth}-${totalHeight}`);

  return totalWidth < 10 ? null : (
    <div>
      <svg width={totalWidth} height={totalHeight}>
        <LinearGradient id="links-gradient" from="#fd9b93" to="#fe6e9e" />
        <rect width={totalWidth} height={totalHeight} rx={14} fill="#272b4d" />
        <Group top={margin.top} left={margin.left}>
          <Tree
            root={hierarchy(data, (d) => (d.isExpanded ? null : d.children))}
            size={[sizeWidth, sizeHeight]}
            separation={(a, b) => (a.parent === b.parent ? 1 : 0.5) / a.depth}
          >
            {(tree) => (
              <Group top={origin.y} left={origin.x}>
                {tree.links().map((link, i) => (
                  <LinkHorizontal
                    key={i}
                    data={link}
                    stroke="rgb(254,110,158,0.6)"
                    strokeWidth="1"
                    fill="none"
                  />
                ))}

                {tree.descendants().map((node, key) => {
                  const width = 40;
                  const height = 20;

                  let top: number;
                  let left: number;
                  top = node.x;
                  left = node.y;

                  return (
                    <Group top={top} left={left} key={key}>
                      {node.depth === 0 && (
                        <circle
                          r={12}
                          fill="url('#links-gradient')"
                          onClick={() => {
                            node.data.isExpanded = !node.data.isExpanded;
                            console.log(node);
                            forceUpdate();
                          }}
                        />
                      )}
                      {node.depth !== 0 && (
                        <rect
                          height={height}
                          width={width}
                          y={-height / 2}
                          x={-width / 2}
                          fill="#272b4d"
                          stroke={node.data.children ? '#03c0dc' : '#26deb0'}
                          strokeWidth={1}
                          strokeDasharray={node.data.children ? '0' : '2,2'}
                          strokeOpacity={node.data.children ? 1 : 0.6}
                          rx={node.data.children ? 0 : 10}
                          onClick={() => {
                            node.data.isExpanded = !node.data.isExpanded;
                            console.log(node);
                            forceUpdate();
                          }}
                        />
                      )}
                      <text
                        dy=".33em"
                        fontSize={9}
                        fontFamily="Arial"
                        textAnchor="middle"
                        style={{ pointerEvents: 'none' }}
                        fill={node.depth === 0 ? '#71248e' : node.children ? 'white' : '#26deb0'}
                      >
                        {node.data.name}
                      </text>
                    </Group>
                  );
                })}
              </Group>
            )}
          </Tree>
        </Group>
      </svg>
    </div>
  );
}
