<script>
import {store, mutations }from "../../mjs";

export default {
    props: {
    	value: {
      		type: String,
      		default: '',
    	}
    },
    watch: {
        value:function(newvalue,oldvalue){
            //console.log(this.value);
            //console.log("value???");
            this.lookupalias();
        }
    },
    components: {
    },
    data() {
        return {
            pubid:'',
            identity:'',
            alias:'',
            born:'',
            education:'',
            skills:'',
            LI:{},
        }
    },
    created(){
        //this.$on('searchalias',this.lookupalias);
    },
    methods: {
        /*
            Work in progress in decrypt profile data
            Need to clean how decrypt correctly.
        */
        async lookupalias(event){
            //console.log("looking...");
            let to = this.$gun.user(this.pubid);
            let user = this.$gun.user();
            let who = await to.get('alias').then();
            if (!who){
                this.alias = '';
                this.identity = '';
                this.born = '';
                this.education = '';
                this.skills = '';
                return;
            }
            //this.alias = who;

            let identity = await to.get('alias').then();
            this.identity = identity;
            let self = this;
            //let alias = await to.get('profile').get('alias').then();
            to.get('profile').get('alias').decryptdata(to,ack=>{
                console.log("ack",ack);
                self.alias = ack;
            });
            /*
            to.get('profile').get('born').decryptdata(to,ack=>{
                console.log("ack",ack);
                self.born = ack;
            });

            to.get('profile').get('education').decryptdata(to,ack=>{
                console.log("ack",ack);
                self.education = ack;
            });

            to.get('profile').get('skills').decryptdata(to,ack=>{
                console.log("ack",ack);
                self.skills = ack;
            });
            */
        },
        async getprofilevar(_name,_value){
			let user = this.$gun.user();
            let pkey = await user.get('trust').get(user.is.pub).get(_name+'profile').then();
            //console.log(pkey)
			var mix = await Gun.SEA.secret(await user.get('epub').then(), mutations.pair());
			//let epub = await user.get('epub').then();
			pkey = await Gun.SEA.decrypt(pkey, mix);
			//console.log(pkey)
			let val = await Gun.SEA.decrypt(_value, pkey);
			//console.log(val)
			return val || _value;
		},
    }
}
</script>


<template>
    <div>
        Alias Public Key Search
        <table>
        <tr>
            <td>Public Key</td>
            <!--
                <input :value="value" @input="lookupalias">
            -->
            <td><input v-model="pubid" @input="lookupalias"></td>
        </tr>
        <tr>
            <td>Alias</td>
            <td><input v-model="alias"></td>
        </tr>
        <tr>
            <td>Born</td>
            <td><input v-model="born"></td>
        </tr>
        <tr>
            <td>Education</td>
            <td><input v-model="education"></td>
        </tr>
        <tr>
            <td>Skills</td>
            <td><input v-model="skills"></td>
        </tr>
        </table>
    </div>
</template>