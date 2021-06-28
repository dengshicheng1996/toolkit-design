import * as React from 'react'
import Result from '../index'
import { AlipayCircleFill } from '@ant-design/mobile-icons'

export default () => (
  <>
    <Result
      img={<AlipayCircleFill color="#1677ff" size="lg" />}
      title="操作成功"
      message="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
      buttons={[
        {
          type: 'primary',
          children: '返回首页',
        },
        {
          children: '取消',
        },
      ]}
    />
    <hr />
    <Result
      type="success"
      title="操作成功"
      message="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
    />

    <hr />

    <Result
      type="error"
      title="错误操作"
      message="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
    />

    <hr />

    <Result
      type="info"
      title="信息提示"
      message="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
    />

    <hr />

    <Result
      type="warn"
      title="警告提示"
      message="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
    />

    <hr />

    <Result
      type="wait"
      title="等待处理"
      message="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
    />
  </>
)
