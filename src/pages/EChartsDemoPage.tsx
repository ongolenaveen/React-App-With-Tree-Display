import ReactECharts from 'echarts-for-react';
import { useState } from 'react';
import { EchartData } from '../data/echartClients';

const options = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove',
  },
  color: ['#5470c6', '#91cc75', '#fac858'],
  series: [
    {
      type: 'tree',
      name: 'tree1',
      data: [EchartData],
      top: '5%',
      left: '7%',
      bottom: '2%',
      right: '60%',
      symbolSize: 8,
      fontSize: 9,
      //symbol:
      //'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
      label: {
        position: 'left',
        verticalAlign: 'middle',
        align: 'right',
      },
      leaves: {
        label: {
          position: 'right',
          verticalAlign: 'middle',
          align: 'left',
        },
      },
      initialTreeDepth: 2,
      emphasis: {
        focus: 'descendant',
      },
      roam: 'zoom',
      expandAndCollapse: true,
      animationDuration: 550,
      animationDurationUpdate: 750,
    },
  ],
};
const Selected = ({ name }: any) => {
  return <>{name ? <p>{name} selected 🚀</p> : <p>No item selected 🤔</p>}</>;
};

export function EChartsDemoPage() {
  const [name, setName] = useState('');
  return (
    <>
      <Selected name={name} />
      <ReactECharts
        style={{ height: '100vh', width: '100%' }}
        option={options}
        onEvents={{
          click: (e: any) => {
            setName(e.name);
          },
        }}
      />
    </>
  );
}
