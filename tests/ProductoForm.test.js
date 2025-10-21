import { mount } from '@vue/test-utils'
import Producto from '../src/components/producto.vue' 

describe('Componente Producto.vue', () => {
  it('se monta correctamente', () => {
    const wrapper = mount(Producto)
    expect(wrapper.exists()).toBe(true)
  })

  it('tiene inputs y un boton', () => {
    const wrapper = mount(Producto)
    const inputs = wrapper.findAll('input')
    const button = wrapper.find('button')

    expect(inputs.length).toBe(2) 
    expect(button.exists()).toBe(true)
  })

  
})