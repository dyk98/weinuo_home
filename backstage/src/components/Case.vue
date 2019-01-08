<template>
    <!--案例轮播-->
    <div class="body">
        <div class="container">
            <div class="upload">
                <input class="file" name="file" type="file" ref="upload" accept="image/png,image/jpg" @change="update"/>
            </div>


        </div>
    </div>
</template>

<script>

    export default {
        name: "Case",
        methods: {
            update(e){
                let file = e.target.files[0];
                let param = new FormData(); //创建form对象
                param.append('file',file,file.name);//通过append向form对象添加数据
                param.append('chunk','0');//添加form表单中其他数据
                console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
                let config = {
                    headers:{'Content-Type':'multipart/form-data'}
                };  //添加请求头
                this.axios.post('http://47.93.33.250/php/add.php',param,config)
                    .then(response=>{
                        console.log(response.data);
                    })
            }
        },

    }

</script>

<style scoped>
    .body {
        width: auto;
        height: 100%;
        background-color: #eff5f8;
        margin-top: 20px;
    }
    .container {
        width: 100%;
        height: 100%;
    }
</style>