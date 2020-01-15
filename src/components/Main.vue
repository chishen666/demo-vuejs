<template>
    <div style="height: 300px; width: 500px; border: 1px solid blue">
        <div style="height:20%; background-color: aquamarine">
            <Top></Top>
        </div>
        <div style="height:80%; width:20%; float: left; background-color: cadetblue">
            <Left></Left>
        </div>
        <div style="height:80%; width:80%; float: left; ">
            <Contentt></Contentt>
        </div>

    </div>
</template>

<script>
    import Top from '@/components/Top';
    import Left from '@/components/Left';
    import Contentt from '@/components/Content';

    export default {
        name: "Main",
        components: {Top, Left, Contentt}
    }
</script>

<style scoped>

</style>