import * as React from 'react';
import Terms from '../index';
import Button from '../../Button';

export default () => {
  return (
    <>
      <Terms
        value="a1"
        defaultChecked
        hasChecked
        term={
          <>
            同意 <a>xx协议</a>
          </>
        }
      />
      <Terms
        hasChecked
        term={
          <>
            同意<a>《用户授权协议》</a>
          </>
        }
      ></Terms>
      <Terms
        id="idp2"
        hasChecked
        term={
          <>
            <label htmlFor="idp2">我也可以点</label>
            <a>《我不可以点》</a>
          </>
        }
      >
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Terms>
      <Terms
        describe
        term={
          <>
            同意<a>《用户授权协议》</a>
          </>
        }
      >
        <Button type="primary">按钮</Button>
      </Terms>
    </>
  );
};
