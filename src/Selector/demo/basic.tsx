import * as React from 'react';
import Selector from '../index';

function handleChange(selectedItems: number[]) {
  console.log(selectedItems);
}

export default () => {
  return (
    <>
      <Selector
        onChange={handleChange}
        items={[
          {
            text: '选项一',
            value: 1,
          },
          {
            text: '选项二',
            value: 2,
          },
        ]}
      />
      <Selector
        multiple={true}
        onChange={handleChange}
        items={[
          {
            text: '选项一',
            value: 1,
          },
          {
            text: '选项二',
            value: 2,
          },
          {
            text: '选项三',
            value: 3,
            disabled: true,
          },
        ]}
      />
      <Selector
        onChange={handleChange}
        items={[
          {
            text: '选项一',
            subText: '描述文案',
            value: 1,
          },
          {
            text: '选项二',
            subText: '描述文案',
            value: 2,
          },
        ]}
      />
      <h3>multiple lines</h3>
    </>
  );
};
