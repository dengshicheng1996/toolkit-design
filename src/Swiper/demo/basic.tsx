import * as React from 'react'
import Swiper from '../index'
import './demo.less'

const { SwiperItem } = Swiper

export default () => {

  const fixedIndicator = false
  const direction = 'vertical'
  const fixedSpaceBetween = 20

  return (
    <div style={{ padding: '24px 0' }}>
      <Swiper
        className="a-swiper"
        // 这里加 key 是为了强制刷新
        // 实际项目中不要加
        key={Math.random()}
        indicator={fixedIndicator}
        direction={direction}
        spaceBetween={fixedSpaceBetween}
      >
        <SwiperItem>
          <p className="swiper-p" style={{ background: 'red' }}>
            1
          </p>
        </SwiperItem>
        <SwiperItem>
          <p className="swiper-p" style={{ background: 'blue' }}>
            2
          </p>
        </SwiperItem>
        <SwiperItem>
          <p className="swiper-p" style={{ background: 'green' }}>
            3
          </p>
        </SwiperItem>
        <SwiperItem>
          <p className="swiper-p" style={{ background: '#ccc' }}>
            4
          </p>
        </SwiperItem>
      </Swiper>
    </div>
  )
}
