//获取验证码
$(function(){
	$("#change").click(function(){
		var result="";
		for(i=0;i<4;i++){
			result=result+(parseInt(Math.random()*10)).toString();
		}
	$("#code").val(result);
	})
})
//表单验证
function chang(user,pass,code){   
//字母/数字/下划线组成，字母开头，4-16位
     var u = /^[a-zA-z]\w{3,15}$/gi;
//电话号码查找11位数字字符并以1开头
     var t = /^1\d{10}$/ 
//第一部分：由字母/数字/下划线/短线/点号组成 
//第二部分：为一个域名，域名由字母/数字/短线/域名后缀组成
//域名后缀一般为.xxx或xxx.xx/cn,com,net/现在的也有大于4位的
     var e = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
     var p = /\d{6}/; //密码-查找6位数字字符串
     if(t.test(user) || u.test(user) || e.test(user))
      {
        if(p.test(pass))
        {
          if(code== $("#code").val()){
              alert("输入格式正确,可以登录！")
          }
          else{
              alert("验证码错误，请输入正确验证码~")
          }
        }
        else{
            alert("密码错误!")
        }
        alert("zhengque")
      }
      else{
         alert("账号错误，请重新登陆!")
        // $(this).parent().prepend("<span class='in on1'>请输入正确的姓名</span>");
     }

}

