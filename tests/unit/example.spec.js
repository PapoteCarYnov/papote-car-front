import { shallowMount } from '@vue/test-utils'
import LoginView from '@/views/LoginView.vue'

describe('LoginView.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = "InscriptionS'inscrire"
    const wrapper = shallowMount(LoginView)
    expect(wrapper.text()).toMatch(msg)
  })
})
