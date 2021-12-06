import { ReactElement } from 'react';
import { mount as baseMount, MountRendererProps, ReactWrapper } from 'enzyme';
import { TestContainer } from 'utils/enzyme-test-utils/TestContainer';

export function mount<P>(
  node: ReactElement<P>,
  options?: MountRendererProps,
): ReactWrapper<P, any> {
  return baseMount(node, { wrappingComponent: TestContainer, ...(options || {}) });
}
