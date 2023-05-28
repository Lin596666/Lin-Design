<template>
    <div class="button">
        <button>
            123
        </button>
    </div>
</template>

<script setup lang="ts">
import { ButtonProps, buttonProps } from './button-type'
defineProps<ButtonProps>({
    title:{
        default:'按钮',
        type:buttonProps
    }
})
</script>

<style lang="scss" scoped>
.button {}
</style>
