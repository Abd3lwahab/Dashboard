<template>
  <div class="form">
    <div class="form-header has-text-centered mb-5">
      <h2 v-if="hasExtraHeader" class="formExtraHeader">
        {{ formExtraHeader }}
      </h2>
      <h3 class="formHeader">{{ formHeader }}</h3>
    </div>
    <form class="form-content">
      <slot name="form-content"></slot>
    </form>
    <div v-if="hasFooter" class="form-footer">
      <slot name="form-footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    formHeader: String,
    hasExtraHeader: Boolean,
    formExtraHeader: String,
    hasFooter: Boolean,
  },
  data: () => {
    return {}
  },
}
</script>
