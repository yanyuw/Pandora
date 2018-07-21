<template>
    <div class="parent">
        <img src="http://p9lce13x8.bkt.clouddn.com/older.png" class="npc"/>
        <div id="text" @click = "next()">
            {{txt[index]}}
            <img src="http://p9lce13x8.bkt.clouddn.com/right.png" class="arrow"/>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'intro',
    data () {
        return{
            txt:[
                "你好，勇者大人。欢迎来到潘多拉的世界。",
                "作为村长，很高兴能够看到你这样的年轻人来到这里消灭罪恶。说起来，还没问过你的名字呢？",
                "不错的名字。对了，为了计算打败罪恶的多少，每位勇者都要设定自己的编号，来定一个你的勇者编号吧！",
                "好啦，选择潘多拉魔盒中的恶习，用你坚定的意志打败他们吧，成为世界第一的勇者大人吧！"

            ],
            index: 0,
            account: "",
            password: "",
        }
    },
    mounted(){
        // var str = this.txt[this.index];
        // var i = 1;
        // var bound = document.getElementById("text");
          
        // function feed(){
        //       if(i == str.length+1){
        //           this.index++;
        //           if(this.index > this.txt.length){
        //               console.log("!");
        //               this.index = 0;
        //           }
        //           bound.innerText = ' ';
        //           str = this.txt[this.index];
        //           i = 0;
        //       }
        //       bound.innerText == str.substring(0, i);
        //       i++;
        //       setTimeout("feed()", 200);
              
        // }
    },
    methods: {
        next(){
            this.index++;
            if(this.index == 2){
                this.$options.methods.sign_ac();
            } else if(this.index == 3){
                this.$options.methods.sign_pw();
            }else if(this.index == 4){
                this.$router.push("/choose");

            }
                        
        },
        sign_ac(){
            this.account = prompt("请输入您的用户名","");

        },
        sign_pw(){
            this.password = prompt("请输入您的密码","");
            // fetch("/api/", {
            //   method: 'POST',
            //   body:  JSON.stringify(data),
            //   headers: {
            //     "Content-Type":"application/json"   
            //   }
            // }).then(res => {
            //   if (res.ok) {
		    //     return res.json()
            //   } else {
            //       console.log('x');
            //     this.failed = true;
	        //   }
            // }).then(value => {
            //     // do something
                
            // })
      
            
        }

      
    }
}
</script>

<style scoped>
.parent{
    background-image: url(http://p9lce13x8.bkt.clouddn.com/newbg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    min-height: 667px;
    display: block;
    position: absolute;
    top:0;
    left:0;
}
.npc{
    width: 250px;
    padding-top: 50%;
}
#text{
    background-image: url(http://p9lce13x8.bkt.clouddn.com/talk.png);
    background-repeat: no-repeat;
    background-size: contain ;
    text-align: left;
    width: 380px;
    height: 180px;
    position: absolute;
    bottom: 0;
    padding: 50px 50px;
    box-sizing: border-box;
    font-size: 16px;
    
}
.arrow{
    width:30px;
    margin-left: 10px;
    animation: move 1s infinite;
}
@keyframes move {
    from {margin-left: 0;}
}


</style>
