<template>
    <div>
        <div>
            <p>动态轮播图</p>
            <img src="" alt="">
        </div>
        <div>

            <!--<form action="http://47.93.33.250/php/uploads.php" method="post" role="form" enctype='multipart/form-data'>-->


                <!--<div class="form-group">-->
                    <!--<input type='file' name='filename' />-->
                <!--</div>-->



                <!--<button type="submit" class="btn btn-primary">Submit</button>-->
            <!--</form>-->
            <p>上传图片</p>
            <input class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="update"/>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Move",
        mounted(){
            this.axios.post('http://47.93.33.250/php/get.php', {})
                .then(function (aaa) {
                    console.log(aaa)
                })

        },
        methods: {
            update(e) {
                let file = e.target.files[0];
                let param = new FormData(); //创建form对象
                param.append('filename', file, file.name);//通过append向form对象添加数据
                console.log(param.get('filename')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
                this.axios.post('http://47.93.33.250/php/uploads.php', param)
                    .then(response => {
                        console.log(response.data);
                    })
            }
        }
    }
</script>

<style scoped>

</style>