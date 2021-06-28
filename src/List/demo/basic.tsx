import * as React from 'react';
import List from '../index';
import { AlipayCircleFill } from '@ant-design/mobile-icons';
const { Item } = List;

export default () => {
  const addProps = {
    thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    brief: '第二行',
    extra:
      '详细详细详细详细详细详细详细详细详细详细详细详细详细详细详细详细详细',
    platform: 'android' as any,
  };

  return (
    <>
      <List renderHeader="列表头部" renderFooter="列表底部" radius={true}>
        <Item {...addProps} onPress={() => null}>
          基本可变
        </Item>
        <Item thumb={AlipayCircleFill} extra="错误信息" error brief="第二行">
          多行
        </Item>
        <Item>其他控件</Item>
        <Item>其他控件</Item>
      </List>
    </>
  );
};
