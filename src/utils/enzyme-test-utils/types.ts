import { ReactWrapper, ShallowWrapper } from 'enzyme';

export type WrapperType =
  // eslint-disable-next-line
  | ShallowWrapper<any, any, React.Component<{}, {}, any>>
  // eslint-disable-next-line
  | ReactWrapper<any, any, React.Component<{}, {}, any>>;
