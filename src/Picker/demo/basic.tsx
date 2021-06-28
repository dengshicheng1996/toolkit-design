import * as React from 'react';
import Picker from '../index';
import WhiteSpace from '../../WhiteSpace';
import WingBlank from '../../WingBlank';

function loadScript(url: string, callback?: any) {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.onload = function () {
    callback?.();
  };
  script.src = url;
  head.appendChild(script);
}

const defaultSeasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
];

const getData = async () => {
  // @ts-ignore
  if (window['antd-mobile-demo-data']) {
    // @ts-ignore
    return Promise.resolve(window['antd-mobile-demo-data']);
  }

  return new Promise((resolve) => {
    loadScript(
      'https://gw.alipayobjects.com/os/lib/antd-mobile-demo-data/0.3.0/dist/index.js',
      () => {
        // @ts-ignore
        resolve(window['antd-mobile-demo-data']);
      },
    );
  });
};

export default () => {
  const events = {
    onChange: (v: any) => console.log('onChange', v),
    onPickerChange: (v: any) => console.log('onPickerChange', v),
    onOk: (v: any) => console.log('onOk', v),
    onDismiss: () => console.log('onDismiss'),
  };
  const [data, setData] = React.useState(
    {} as { district: any; province: any; provinceLite: any },
  );
  const [seasons, setSeasons] = React.useState([] as any);
  React.useEffect(() => {
    setSeasons(defaultSeasons);
    getData().then((d) => {
      setData(d);
    });
  }, []);

  return (
    <>
      <Picker data={data.district} title="选择" {...events}>
        请选择
      </Picker>
      <Picker data={data.provinceLite} title="选择" cols={1} {...events}>
        请选择
      </Picker>
      <Picker data={seasons} title="选择" cascade={false} {...events}>
        请选择
      </Picker>
      <Picker
          data={seasons}
          title="选择"
          cascade={false}
          {...events}
          defaultValue={['2014', '夏']}
        >
          单独使用，点击
        </Picker>
    </>
  );
};
