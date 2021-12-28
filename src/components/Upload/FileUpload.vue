<template>
    <input type="file" @change="onChange($event)">
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default  defineComponent({
    props: ['modelValue'],
    methods: {
        onChange(event : Event) {
             const target = event.target as HTMLInputElement;
            const files = target.files as FileList;
            this.$emit('update:modelValue', files[0]);
        },
    },
});
</script>