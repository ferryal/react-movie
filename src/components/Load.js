import React, {Component} from "react"
import { Spin, Icon } from "antd"


export default class Load extends Component {
  render() {
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
    return (
      <div>
        <Spin indicator={antIcon} size="large">

        </Spin>
      </div>
    );
  }
}
