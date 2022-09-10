export default defineComponent({
  name: 'WHeader',
  props: {
    // 父组件绑定的v-model
    modelValue: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
  },
  setup(props, { emit, attrs, slots }) {
    let btnClass = 'p-5'
    return () => {
      return (
        <div class={[btnClass]}>
          {slots?.default()}
        </div>
      )
    }
  }
})
