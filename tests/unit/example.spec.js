import { mount } from '@vue/test-utils'
import LoginView from '@/views/LoginView.vue'

describe('LoginView.vue', () => {
  it('find text Inscription', () => {
    const msg = "InscriptionS'inscrire"
    const wrapper = mount(LoginView)
    expect(wrapper.text()).toMatch(msg)
  })

  it('should show the form element on the user output', async() => {
    const wrapper = mount(LoginView)
    expect(wrapper.find("v-form").exists()).toBe(true)
  })

});
