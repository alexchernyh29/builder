<template>
    <div>
        <teleport to="#wrap-modal-builder">
            <div class="modal">
                <slot/>
            </div>
        </teleport>
    </div>
</template>
<script setup>
</script>
<style scoped>
.modal{
    top: 0;
    position: sticky;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: scroll;
    width: 465px;
    height: 100%;
    max-height: 100vh;
    padding: 20px;
    background: #F9F8F9;
    box-shadow: 0px 8px 16px rgba(35, 29, 51, 0.05);
}
</style>