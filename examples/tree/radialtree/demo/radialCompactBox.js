import G6 from '@antv/g6';

fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')
  .then(res => res.json())
  .then(data => {
    const width = document.getElementById('container').scrollWidth;
    const height = document.getElementById('container').scrollHeight;
    const graph = new G6.TreeGraph({
      container: 'container',
      width,
      height,
      pixelRatio: 2,
      linkCenter: true,
      modes: {
        default: [{
          type: 'collapse-expand',
          onChange: function onChange(item, collapsed) {
            const data = item.get('model').data;
            data.collapsed = collapsed;
            return true;
          }
        }, 'drag-canvas', 'zoom-canvas' ]
      },
      defaultNode: {
        size: 16,
        style: {
          fill: '#40a9ff',
          stroke: '#096dd9'
        }
      },
      defaultEdge: {
        style: {
          stroke: '#A3B1BF'
        }
      },
      layout: {
        type: 'compactBox',
        direction: 'RL',
        getId: function getId(d) {
          return d.id;
        },
        getHeight: () => {
          return 16;
        },
        getWidth: () => {
          return 16;
        },
        getVGap: () => {
          return 20;
        },
        getHGap: () => {
          return 30;
        },
        radial: true
      }
    });

    graph.node(function(node) {
      return {
        size: 26,
        style: {
          fill: '#40a9ff',
          stroke: '#096dd9'
        },
        label: node.id
      };
    });

    graph.data(data);
    graph.render();
    graph.fitView();
  });
