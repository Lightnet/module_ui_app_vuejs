<script>
import uuidv4 from "uuid/v4";
import {store, mutations }from "../../mjs";
export default {
  components:{

  },
  computed:{
    getUser(){
      return store.username;
    }
  },
  data() {
    return {
      id:uuidv4(),
      question1:'',
      question2:'',
      hint:'',
    }
  },
  created(){
    this.getchangehint();
  },
  mounted(){
    //this.getchangehint();
  },
  methods:{
    async getchangehint(){
      //console.log("get data");
      let user = this.$gun.user();
      console.log("user========");
      console.log(user);


      let sec = await Gun.SEA.secret(user.is.epub, mutations.pair());//get user for encrypt message

      this.question1 = await user.get('forgot').get('q1').then();
      this.question1 = await Gun.SEA.decrypt(this.question1, sec);//encrypt hint

      this.question2 = await user.get('forgot').get('q2').then();
      this.question2 = await Gun.SEA.decrypt(this.question2, sec);//encrypt hint

      sec = await Gun.SEA.work(this.question1,this.question2);//encrypt key
      this.hint = await user.get('hint').then();
      //console.log(this.hint);
      this.hint = await Gun.SEA.decrypt(this.hint, sec);//encrypt hint
    },
    async clickchangehint(){
      let user = this.$gun.user();
      let self = this;

      console.log("user========");
      console.log(user);

      let q1 = this.question1; //get input q1
      let q2 = this.question2;//get input q2
      let hint = this.hint;//get input hint
      let sec = await Gun.SEA.secret(user.is.epub, mutations.pair());//get user for encrypt message
      let enc_q1 = await Gun.SEA.encrypt(q1, sec);//encrypt q1
      user.get('forgot').get('q1').put(enc_q1);//set hash q1 to user data store
      let enc_q2 = await Gun.SEA.encrypt(q2, sec);//encrypt q1
      user.get('forgot').get('q2').put(enc_q2); //set hash q2 to user data store
      sec = await Gun.SEA.work(q1,q2);//encrypt key
      //console.log(sec);
      let enc = await Gun.SEA.encrypt(hint, sec);//encrypt hint
      //console.log(enc);
      
      user.get('hint').put(enc,ack=>{//set hash hint
        //console.log(ack);
        if(ack.ok){
          //displayeffectmessage('Hint Apply!'); //display message effects
          //self.$root.$emit('dialogmessage','Hint Apply!');
          console.log('Hint Apply!');
        }
      });
      
    }
  }
};
</script>

<template>
  <div :id="id">
    Recover Hint Passphase:
    <table>
    <tr>
      <td>Question 1</td>
      <td><input v-model="question1"></td>
    </tr>
    <tr>
      <td>Question 1</td>
      <td><input v-model="question2"></td>
    </tr>
    <tr>
      <td>Hint</td>
      <td><input v-model="hint"></td>
    </tr>
    <tr>
      <td></td>
      <td><button @click="clickchangehint">Sumbit</button></td>
    </tr>
    </table>
  </div>
</template>