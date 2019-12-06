<template>
    <el-container>
        <el-header class="logo" height="160px">
            <img src="../../assets/images/login/logo.png">
            <i></i>
            <img src="../../assets/images/login/telphone.png">
        </el-header>
        <el-main>
            <div class="signin-wrap">
                <img src="../../assets/images/login/title.png">
                <div class="grid-content signin-box">
                    <p>欢迎 Welcome</p>
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                        <el-input placeholder="请输入内容" v-model="ruleForm.username" clearable></el-input>
                        <el-input placeholder="请输入密码" v-model="ruleForm.password" show-password @keyup.enter.native="submitForm('ruleForm')"></el-input>
                        <el-button type="primary" round @click="submitForm('ruleForm')">登录</el-button>
                    </el-form>
                    
                </div>
            </div>
        </el-main>
        <el-footer height="100px">
            <p>京ICP备05047554号Copyright © 2002-2019</p>
			<p>北京社科赛斯教育科技有限公司</p>
        </el-footer>
    </el-container>
</template>

<script>
export default {
    name: 'Login',
    // props: {
    //     msg: String
    // },
    data() {
        return {
            ruleForm: {
                username: '',
                password: '', 
            },
            rules: {
                username: [
                    {required: true,message: '请输用户名',trigger:blur}
                ],
                password: [
                    {required: true,message: '请输密码',trigger:blur}
                ]
            }
        }
    },
    mounted() {

    },
    methods: {
        submitForm(formName){
            // window.console.log(this); 
            const self = this;
            localStorage.setItem('ms_username',self.ruleForm.username);
            localStorage.setItem('ms_user',JSON.stringify(self.ruleForm));
            window.console.log(self);   
            self.$message({
                    message: '登录成功',
                    type: 'success'
                })
            self.$axios({
                url: 'http://127.0.0.1:8082/shuki/helloApi',
                method: 'POST',
                //params是拼接到URL后面，data 是formdata中
                data: {
                    username: self.ruleForm.username,
                    password: self.ruleForm.password,
                    csrftoken: 'saaadaadasdadadassdadadadasdAADAAFGAGAFADASASAER'
                }
            }).then(res => {
                    self.$message({
                    message: '登录成功',
                    type: 'success'
                })
                window.console.log(res);
                // 登录成功后路由跳转
                //self.$router.push('/readme')
            })
            // console.log(response);
            // if (response.data == -1) {
            //     self.errorInfo = true;
            //     self.errInfo = '该用户不存在';
            //     console.log('该用户不存在')
            // } else if (response.data == 0) {
            //     console.log('密码错误')
            //     self.errorInfo = true;
            //     self.errInfo = '密码错误';
            // } else if (response.status == 200) {
            //     self.$message({
            //         message: '登录成功',
            //         type: 'success'
            //     })
            //     self.$router.push('/readme');
            // }                            
            
            window.console.log(self.$refs[formName]); 
            // this.$message({
            //     message: '登录成功',
            //     type: 'success'
            // })
        }
    }
}
</script>

<style scoped>
.el-container{background: #0085E8;flex-direction: column;height: 100%;min-height: 656px;}
.logo{text-align: left;vertical-align: middle;line-height: 160px;}
.logo img:first-child{height: 32px;margin-left: 3%;}
.logo img:last-child{margin: 0 0 0 12px;}
.logo>i{display: inline-block;width: 0;height: 22px;border: 1px solid #ffffff;margin: 0 0 0 16px;}

.el-main{overflow: hidden;}
.signin-wrap{width: 368px;margin: 0 auto;}
.signin-wrap>img{margin: 0 0 32px 0;}
.signin-box{box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);border-radius: 4px;background-color: #ffffff;}
.signin-box p{text-align: left;text-indent: 24px;padding-top: 24px;font-weight: 500;}
.signin-box .el-input{background-color: #f4f4f4;width: 86%;margin: 6px 0;}
.signin-box .el-button{width: 86%;margin: 24px 0;}
.el-footer{color: #ffffff;}
</style>