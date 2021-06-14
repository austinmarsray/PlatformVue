<template>
	<div class="login-register">
		<!-- <div class="title">学车平台</div> -->
		<div class="contain">
			<div class="big-box" :class="{active:isLogin}">
				<div class="big-contain" v-if="isLogin">
					<div class="btitle">用户登录</div>
					<div class="bform">
						<div class="binform">
							<label>用户名:</label>
							<input type="text" placeholder="用户名" v-model="form.username">
							<span class="errTips" v-if="usernameError">* 用户名填写错误 *</span>
						</div>
						<div class="binform">
							<label>密码:</label>
							<input type="password" placeholder="密码" v-model="form.userpwd">
							<span class="errTips" v-if="passwordError">* 密码填写错误 *</span>
						</div>
					</div>
					<button class="bbutton" @click="login">登录</button>
				</div>
				<div class="big-contain" v-else>
					<div class="btitle">创建用户</div>
					<div class="bform">
						<div class="binform">
							<label>用户名:</label>
							<input type="text" placeholder="用户名" v-model="form.username">
							<span class="errTips" v-if="existed">* 用户名已经存在！ *</span>
						</div>
						<div class="binform">
							<label>邮箱:</label>
							<input type="email" placeholder="邮箱" v-model="form.useremail">
						</div>
						<div class="binform">
							<label>密码:</label>
							<input type="password" placeholder="密码" v-model="form.userpwd">
						</div>
						<div class="binform">
							<label>再次输入密码:</label>
							<input type="password" placeholder="再次输入密码" v-model="form.userpwd_again">
						</div>
					</div>
					<button class="bbutton" @click="register">注册</button>
				</div>
			</div>
			<div class="small-box" :class="{active:isLogin}">
				<div class="small-contain" v-if="isLogin">
					<div class="stitle">你好，朋友!</div>
					<p class="scontent">开始注册，和我们一起考驾照</p>
					<button class="sbutton" @click="changeType">注册</button>
				</div>
				<div class="small-contain" v-else>
					<div class="stitle">欢迎回来!</div>
					<p class="scontent">与我们保持联系，请登录你的账户</p>
					<button class="sbutton" @click="changeType">登录</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import '../assets/ribbon.js'
	export default{
		name:'login-register',
		data(){
			return {
				isLogin:true,
				usernameError: false,
				passwordError: false,
				existed: false,
				form:{
					username:'',
					useremail:'',
					userpwd:'',
					userpwd_again:''
				}
			}
		},
		methods:{
			changeType() {
				this.isLogin = !this.isLogin
				this.form.username = ''
				this.form.useremail = ''
				this.form.userpwd = ''
				this.form.userpwd_again=''
			},
			login() {	
				const self = this;
				if(self.form.username != "" && self.form.userpwd != ""){
					request_local({
						data: {
							username :self.username,
							password: self.form.userpwd
						},
					})
					.then(res => {
						console.log(res.data);	
					})
					.catch(err => {
						console.log(err);
					})
				}
				else{
					this.$message({
						message: '填写不能为空！',
						showClose: true,
						type: 'warning',
					});
				}
			},
			register(){
				const self = this;
				if(self.form.username != "" && self.form.useremail != "" && self.form.userpwd != "" && self.form.userpwd_again !=""){
					if(self.form.userpwd == self.form.userpwd_again){
						request_local({
							data: {
								username :self.username,
								email: self.form.useremail,
								password: self.form.userpwd,
								password_again: self.form.userpwd_again
							},
						})
						.then(res => {
							console.log(res.data);	
						})
						.catch(err => {
							console.log(err);
						})
					}
					else{
						this.$message({
							showClose: true,
							message: '两次密码填写不一样！请重新填写',
							type: 'error',
							});
					}
				}	
				else{
					this.$message({
						message: '填写不能为空！',
						showClose: true,
						type: 'warning',
					});
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.title{
		top: 40px;
		left: 0;
		position: relative;
		font-size: 2.8em;
		font-weight: bolder;
		font-family: "Times New Roman";
		color: rgb(57,167,176);
	}
	.login-register{
		width: 98vw;
		height: 97vh;
		box-sizing: border-box;
	}
	.contain{
		width: 60%;
		height: 60%;
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		background-color: #fff;
		border-radius: 20px;
		box-shadow: 0 0 3px #f0f0f0,
					0 0 6px #f0f0f0;
	}
	.big-box{
		width: 70%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 30%;
		transform: translateX(0%);
		transition: all 1s;
	}
	.big-contain{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.btitle{
		font-size: 1.5em;
		font-weight: bold;
		color: rgb(57,167,176);
	}
	.bform{
		width: 100%;
		height: 40%;
		padding: 2em 0;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.bform .binform{
		width: 100%;
	}
	/* .bform .binform lable, .bform .binform input{
		display: table-cell;
	} */
	.bform .bonform .errTips{
		display: block;
		width: 50%;
		text-align: left;
		color: red;
		font-size: 0.7em;
		margin-left: 1em;
	}
	.bform .binform label {
	  float: left;
	  display: block;
	  width: 60px;
	  height: 30px;
	  padding-left: 10%;
	  text-align: left;
	  font-size: 1.0em;
	  font-weight: bold;
	  color: rgb(49, 146, 153);
	  
	}
	.bform .binform input{
		width: 60%;
		height: 30px;
		border: none;
		outline: none;
		border-radius: 10px;
		padding-left: 2em;
		background-color: #f0f0f0;
		display: inline;
	}
	.bbutton{
		width: 20%;
		height: 40px;
		border-radius: 24px;
		border: none;
		outline: none;
		background-color: rgb(57,167,176);
		color: #fff;
		font-size: 0.9em;
		cursor: pointer;
	}
	.small-box{
		width: 30%;
		height: 100%;
		background: linear-gradient(135deg,rgb(57,167,176),rgb(56,183,145));
		position: absolute;
		top: 0;
		left: 0;
		transform: translateX(0%);
		transition: all 1s;
		border-top-left-radius: inherit;
		border-bottom-left-radius: inherit;
	}
	.small-contain{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.stitle{
		font-size: 1.5em;
		font-weight: bold;
		color: #fff;
	}
	.scontent{
		font-size: 0.8em;
		color: #fff;
		text-align: center;
		padding: 2em 4em;
		line-height: 1.7em;
	}
	.sbutton{
		width: 60%;
		height: 40px;
		border-radius: 24px;
		border: 1px solid #fff;
		outline: none;
		background-color: transparent;
		color: #fff;
		font-size: 0.9em;
		cursor: pointer;
	}
	
	.big-box.active{
		left: 0;
		transition: all 0.5s;
	}
	.small-box.active{
		left: 100%;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		border-top-right-radius: inherit;
		border-bottom-right-radius: inherit;
		transform: translateX(-100%);
		transition: all 1s;
	}
</style>