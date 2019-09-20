import React from 'react';
import { Tabs } from 'antd';
import './App.css';
import 'symbol-observable';   // 不导入会导致 componentFromProps 失效报错
import InputFetch from './components/InputFetch';
import WithRecomp from './components/WithRecomp';

const { TabPane } = Tabs;

const App = (props) => {
  return (
    <div className="App">
      <h2>基于 react 的 rxjs 学习与练习。</h2>
      <Tabs defaultActiveKey="2">
        <TabPane tab="input fetch" key="1">
          <InputFetch />
        </TabPane>
        <TabPane tab="with recompose" key="2">
          <WithRecomp />
        </TabPane>
        <TabPane tab="with rxjs-hooks" key="3">
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
