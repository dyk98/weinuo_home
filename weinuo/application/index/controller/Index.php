<?php
namespace app\index\controller;

use think\controller;
use think\request;

class Index
{
    public function index()
    {
        return view();

    }

    public function hello($name = 'ThinkPHP5')
    {
        return 'hello,' . $name;
    }

    public function upload()
    {

        // 获取表单上传文件 例如上传了001.jpg
        $file = request()->file('pic');
        // 移动到框架应用根目录/uploads/ 目录下
        $info = $file->move('../uploads');
        if($info){
            // 成功上传后 获取上传信息
            // 输出 jpg
            echo $info->getExtension();
            // 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
            echo $info->getSaveName();

            echo $info->getFilename();
        }else{

            echo $file->getError();
        }
    }

}
