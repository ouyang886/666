<template>
    <div class="tabs">
        <el-tag 
        v-for="(tag,index) in tags" :key="tag.name"
        :closable="tag.name!=='user'"
        :effect="$route.name=== tag.name ? 'dark': 'plain'"
        @click="changeMenu(tag)"  @close="handleClose(tag,index)"
        size="small"
        >
        {{tag.label}}
        </el-tag>
    </div>
</template>

<script>
import {mapState}from 'vuex'
export default {
    name: 'CommonTag',

    data() {
        return {
            
        };
    },
    computed:{
        ...mapState({
            tags:state=>state.tab.tabsList
        })
    },
    mounted() {
    },

    methods: {
        changeMenu(tag){
            this.$router.push({ name: tag.name})
           // console.log(this.$route);
        },
        handleClose(tag,index){
           const length = this.tags.length - 1
           if(index===length){
            this.tags.splice(this.tags.indexOf(tag), 1);
            this.$router.push({
                name:this.tags[index - 1].name
            })
           }else{
            this.tags.splice(this.tags.indexOf(tag), 1);
            this.$router.push({
                name:this.tags[index].name
            })
           }
        }
    },
};
</script>

<style lang="less" scoped>
.tabs{
    padding: 15px;
    .el-tag{
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>