import ConfigProvider from 'antd/lib/config-provider';
import zhCN from 'antd/lib/locale/zh_CN';
import React, { PropsWithChildren, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Modal, Form, ModalProps, FormProps } from 'antd';
import style from './modal.less';

let destroyFns: any[] = [];
let uuid = 0;

export interface ModalFormValue {
  [key: string]: any;
}

/**
 * 构建Modal
 */
export function createModal<T extends ModalFormValue>(
  component: React.ReactElement,
  modalProps?: ModalProps,
): Promise<T> {
  const { afterClose, ...restModalProps } = modalProps || {};
  let modalRoot: ReactDOM.Root;

  return new Promise<any>((resolve, reject) => {
    uuid += 1;

    const removeDom = () => {
      setTimeout(() => modalRoot?.unmount(), 1000);
      document.body.contains(rootEl) && document.body.removeChild(rootEl);
    };

    const handleSubmit = (value: any) => {
      resolve(value);
    };

    const handleAfterClose = () => {
      removeDom();
      destroyFns = destroyFns.filter((fn) => fn === removeDom);
      reject();
      afterClose && afterClose();
    };

    const ele = React.cloneElement(component, {
      key: uuid,
      afterClose: handleAfterClose,
      onSubmit: handleSubmit,
      ...restModalProps,
    });

    const modal = <ConfigProvider locale={zhCN}>{ele}</ConfigProvider>;

    const rootEl = document.createElement('div');
    document.body.appendChild(rootEl);
    modalRoot = ReactDOM.createRoot(rootEl);
    modalRoot.render(modal);
    destroyFns.push(removeDom);
  });
}
export function createFormModalOrigin<T extends ModalFormValue>(
  formComponent: React.ReactElement,
  modalProps?: ModalProps,
): Promise<T> {
  const { afterClose, ...restModalProps } = modalProps || {};
  let modalRoot: ReactDOM.Root;

  return new Promise<any>((resolve, reject) => {
    uuid += 1;

    const ref = React.createRef<any>();
    const removeDom = () => {
      setTimeout(() => modalRoot?.unmount(), 1000);
      document.body.contains(rootEl) && document.body.removeChild(rootEl);
    };
    const handleSubmit = (value: any) => {
      resolve(value);
    };
    const handleFinish = (values: any) => {
      ref.current?.setVisible(false);
    };
    const handleAfterClose = () => {
      removeDom();
      destroyFns = destroyFns.filter((fn) => fn === removeDom);
      reject();
      afterClose && afterClose();
    };

    const ele = React.cloneElement(formComponent, {
      onSubmit: handleSubmit,
      onFinish: handleFinish,
    });

    const modal = (
      <ConfigProvider locale={zhCN}>
        <ModalComponent ref={ref} key={uuid} afterClose={handleAfterClose} {...restModalProps}>
          {ele}
        </ModalComponent>
      </ConfigProvider>
    );

    const rootEl = document.createElement('div');
    document.body.appendChild(rootEl);
    modalRoot = ReactDOM.createRoot(rootEl);
    modalRoot.render(modal);
    destroyFns.push(removeDom);
  }).catch(() => {});
}
export function createFormModal<T extends ModalFormValue>(
  component: React.ReactElement,
  modalProps?: ModalProps,
  formProps?: FormProps,
): Promise<T> {
  const FormComponent = createModalFormComponent(component, formProps);
  return createFormModalOrigin(<FormComponent />, modalProps);
}

/**
 * 弹窗组件
 * @param props
 */
const ModalComponent = React.forwardRef((props: ModalProps & PropsWithChildren<any>, ref: any) => {
  const { onOk, onCancel, children, okButtonProps, ...restProps } = props;
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const contentRef = useRef<any>();
  const realChildren = React.cloneElement(children, { ref: contentRef });

  ref.current = { visible, setVisible };

  return (
    <Modal
      className={style.modal}
      visible={visible}
      title="对话框"
      mask={false}
      onCancel={(e) => {
        onCancel && onCancel(e);
        setVisible(false);
      }}
      onOk={async (e) => {
        setLoading(true);

        const contentInstance = contentRef.current;

        try {
          await (contentInstance?.submit && contentInstance.submit());
          onOk && onOk(e);
          setVisible(false);
        } catch (e) {}

        setLoading(false);
      }}
      okButtonProps={{ loading, ...okButtonProps }}
      {...restProps}
    >
      {realChildren}
    </Modal>
  );
});

/**
 * 默认弹窗表单组件
 */
export function createModalFormComponent(component: React.ReactNode, formProps?: FormProps) {
  return class ModalFormComponent extends React.Component<
    { onSubmit?: any; onFinish?: any } & React.PropsWithChildren<any>
  > {
    formRef = React.createRef<any>();

    submit() {
      const { onSubmit } = this.props;
      return this.formRef?.current?.validateFields().then((values: any) => {
        onSubmit && onSubmit(values);
      });
    }

    handleFinish = (values: any) => {
      this.props.onSubmit && this.props.onSubmit(values);
      this.props.onFinish && this.props.onFinish(values);
    };

    render() {
      return (
        <Form ref={this.formRef} onFinish={this.handleFinish} {...formProps}>
          {component}
        </Form>
      );
    }
  };
}
