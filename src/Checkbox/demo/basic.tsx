import * as React from 'react';
import Checkbox from '../index';

export default () => {
  return (
    <>
      <Checkbox value={3}>demo</Checkbox>
      <Checkbox.Group renderHeader="p3: 配合 form, Group 使用">
        {/* 以下四个选项分别展示了选中不选中, 禁用选中禁用不选中的四种状态 */}
        <Checkbox.Item value={1}>{1}</Checkbox.Item>
        <Checkbox.Item value={2}>{2}</Checkbox.Item>
        <Checkbox.Item value={3} disabled>
          {3}
        </Checkbox.Item>
        <Checkbox.Item value={4} disabled>
          {4}
        </Checkbox.Item>
      </Checkbox.Group>
    </>
  );
};
