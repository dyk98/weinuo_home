<?php
namespace app\admin\controller;

use cmf\controller\AdminBaseController;
use think\Controller;
use think\request;
use app\index\model\User;

class Index extends Controller
{
    public function index()
    {
        return $this->fetch('admin');

    }

    public function hello()
    {
        return 'hello,';
    }

    public function upload()
    {

        // 获取表单上传文件 例如上传了001.jpg
        $file = request()->file('pic');
        // 移动到框架应用根目录/uploads/ 目录下
        $info = $file->move('../uploads');
        if($info){
            //上传成功后跳转到index模块的hello方法
            $this->redirect('index/Index/index');
//            // 成功上传后 获取上传信息
//            // 输出 jpg
//            echo $info->getExtension();
//            // 输出 照片
//            echo $info->getSaveName();
//
//            echo $info->getFilename();
        }else{

            echo $file->getError();
        }
    }

}
