<template>

    <form class="form" @submit.prevent="uploadFile">
          <h3>{{message}}</h3>
        <FileUpload v-model="form.file"/>
        <Button text="Upload"/>
    </form>
     <Loader v-show="isLoaded"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios'
import FileUpload from '@/components/Upload/FileUpload.vue';
export default defineComponent({
    components: { FileUpload },
    data: () => ({ 
        form: { file: "" },
        isLoaded : false,
        message: "Upload Your Image"
    }),

    methods: {
        async uploadFile(){
            try{
                this.isLoaded = true;
                let formData = new FormData();
                formData.append('file',this.form.file);

                axios.defaults.headers.common['x-api-key'] = process.env.VUE_APP_API_KEY 
                let response = await axios.post('https://api.thecatapi.com/v1/images/upload', formData, {headers: {'Content-Type':'multipart/form-data' }}) 
                console.log(response.data)
                this.isLoaded = false
                this.message = "Success"
            }catch(error){
                console.log(error)
                this.isLoaded = false
                this.message = "Error"
            }
            },
    }
})
</script>
<style scoped>
.form{
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%);
}
</style>