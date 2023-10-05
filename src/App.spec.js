import { mount } from '@vue/test-utils';
import App from './App.vue';

describe('Banner.vue', () => {
  it('renders the banner with an initial image', () => {
    const wrapper = mount(App);
    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('auto-advances to the next image after a set interval', async () => {
    const wrapper = mount(App);
    const initialImageSrc = wrapper.find('img').attributes('src');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const updatedImageSrc = wrapper.find('img').attributes('src');
    expect(initialImageSrc).not.toBe(updatedImageSrc);
  });
});