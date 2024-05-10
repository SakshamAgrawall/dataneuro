import './App.css'
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true, isResizable: true }, // Set isResizable to true for item "a"
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 }
  ];
  return (
    <div className="App">
      {/* <h1>Responsive grid Layout</h1> */}
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layout }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={350}
        isResizable={true}
        isDraggable={true}
      
      >
        <div key="a" style={{ border: '1px solid #7FEADC',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',background:' #7FEADC' }}>
          Box1
        </div>
        <div key="b" style={{ border: '1px solid #F0DC80',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',background:'#F0DC80' }}>box2</div>
        <div key="c" style={{ border: '1px solid pink',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',background:'pink' }}>box3</div>
      </ResponsiveGridLayout>
    </div>
  );
}

export default App;
