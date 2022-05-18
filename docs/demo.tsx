import { Input } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import React from 'react';
import { createFormModal } from '../src';

const Form = () => {
  return (
    <>
      <FormItem name="test">
        <Input />
      </FormItem>
    </>
  );
};

const Demo = () => {
  return (
    <div>
      <button
        onClick={async () => {
          const res = await createFormModal(<Form />, { width: 300, title: '测试' });
          console.log(res);
        }}
      >
        打开弹窗
      </button>
    </div>
  );
};

export default Demo;
