import * as React from 'react';
import Modal from '../index';
import Button from '../../Button';

export default () => {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <Modal
        maskClosable
        type="product"
        visible={show}
        onClose={() => setShow(false)}
      >
        内容内容
      </Modal>

      <Button
        onPress={() => {
          setShow(true);
        }}
      >
        产品,点蒙层可关闭
      </Button>
      <Modal type="promo" visible={show} onClose={() => setShow(false)}>
        内容内容
      </Modal>

      <Button
        onPress={() => {
          setShow(true);
        }}
      >
        营销
      </Button>
      <Button
        type="primary"
        onPress={() => {
          Modal.alert({
            title: '标题',
            content:
              '我是多个空格合并      我是换行\n内容我是内容我是内容我是内容我是内容',
            thumb:
              'https://img03.sogoucdn.com/app/a/100520093/e18d20c94006dfe0-9eef65073f0f6be0-5c34cd7c7bd3512a8d93e4a844f991dd.jpg',
          });
        }}
      >
        带缩略图
      </Button>
      <br />
      <Button
        type="primary"
        onPress={() => Modal.standard({
          title: '标题',
          content: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
          thumb:
            'https://img03.sogoucdn.com/app/a/100520093/e18d20c94006dfe0-9eef65073f0f6be0-5c34cd7c7bd3512a8d93e4a844f991dd.jpg',
          // thumbSize: {
          //   desc: '缩略图',
          //   v: 'lg',
          //   type: 'radio',
          //   options: ['lg', 'md', 'none'],
          //   hide: d => d.hasBg === true,
          // },
          mainButton: {
            text: '我是长长的文案',
            onPress() {
              Modal.alert({
                content: '主按钮',
              });
            },
          },
          addonButton: {
            text: '辅助按钮',
            onPress() {
              // Toast.success({
              //   content: '辅助按钮',
              //   duration: 1,
              // })
            },
          },
          cancelButton: {
            text: '取消',
            onPress() {},
          },
          custom: <div style={{ background: 'red' }}>自定义控件区</div>,
          background: 'https://i01piccdn.sogoucdn.com/4703665c82c7b294',
          closeType: 'dark',
          onClose() {
            Modal.alert({
              content: 'close',
            });
          },
          onDismiss() {
            Modal.alert({
              content: 'dismiss',
            });
          },
        })}
      >
        点击打开对话框
      </Button>
      <Button
        type="primary"
        onPress={() => {
          Modal.confirm({
            content: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
          });
        }}
      >
        简单模式
      </Button>
    </div>
  );
};
