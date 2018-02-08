import React, {Component} from 'react'
import {Tabs } from 'antd'
import ContentMovie from './ContentMovie'

export default class Head extends Component {
  render() {
    const TabPane = Tabs.TabPane;
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Home" key="1"><ContentMovie /></TabPane>
          <TabPane tab="List Movie" key="2">Content of Tab Pane 2</TabPane>
        </Tabs>
      </div>
    );

  }
}
