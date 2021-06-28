import * as React from 'react'
import PullToRefresh from '../index'
import List from '../../List';

const { Item } = List

export default () => {
  const [refreshing, setRefreshing] = React.useState(false)
  const request = () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 5000)
  }
  const getIndicator = () => {
    return {
      deactivate: '下拉刷新',
      activate: '下拉刷新',
      release: '加载中',
      finish: '加载完成',
    }
  }
  return (
    <>
        <div
          style={
            { background: '#1677ff' }
          }
        >
          <PullToRefresh
            key={'direction'}
            refreshing={refreshing}
            direction={'down'}
            onRefresh={request}
            indicator={getIndicator()}
          >
            <div style={{ height: 340 }}>
              <p>1234</p>
              <p>1234</p>
              <p>1234</p>
              <p>1234</p>
              <p>1234</p>
              <p>1234</p>
              <p>1234</p>
              <p>1234</p>
            </div>
          </PullToRefresh>
        </div>

        <List renderHeader="列表头部" renderFooter="列表底部">
          <PullToRefresh
            key={'1'}
            refreshing={refreshing}
            direction={'up'}
            onRefresh={request}
            indicator={getIndicator()}
          >
            <Item>列表</Item>
            <Item>列表</Item>
            <Item>列表</Item>
            <Item>列表</Item>
            <Item>列表</Item>
            <Item>列表</Item>
            <Item>列表</Item>
            <Item>列表</Item>
            <Item>列表</Item>
          </PullToRefresh>
        </List>
    </>
  )
}
