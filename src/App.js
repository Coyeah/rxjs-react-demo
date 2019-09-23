import React from 'react';
import { Tabs } from 'antd';
import './App.css';
import 'symbol-observable';   // 不导入会导致 componentFromProps 失效报错
import InputFetch from './pages/InputFetch';
import WithRecomp from './pages/WithRecomp';
import WithRxHook from './pages/WithRxHook';
import Combinable from './pages/Combinable';

const { TabPane } = Tabs;

const App = (props) => {
  return (
    <div className="App">
      {/* <h2>基于 react 的 rxjs 学习与练习。</h2> */}
      <Tabs defaultActiveKey="4">
        <TabPane tab="input fetch" key="1">
          <InputFetch />
        </TabPane>
        <TabPane tab="with recompose" key="2">
          <WithRecomp />
        </TabPane>
        <TabPane tab="with rxjs-hooks" key="3">
          <WithRxHook />
        </TabPane>
        <TabPane tab="combinable" key="4">
          <Combinable />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
