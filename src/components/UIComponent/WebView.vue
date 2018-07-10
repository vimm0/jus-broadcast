<template>
    <div class="webview">
        <header>
            <nav class="nav"></nav>
        </header>
        <web ref="wv" class="web" :src="url"></web>
    </div>
</template>
<script>
    const webview = weex.requireModule('webview');
    import Nav from './Nav'
    import util from '../../util'

    export default {
        data() {
            return {
                url0: 'https://95af8719.ngrok.io/',
            }
        },
        components: {
            'nav': Nav
        },
        created(_e) {
            util.initIconFont();
            this.url = util.getUrlSearch(weex.config.bundleUrl, 'weburl') || this.url0;
            console.log('webPageURL', this.url)
            console.log(this)
        },
        methods: {
//            back(event) {
//                webview.goBack(this.$refs.wv);
//            },
//            close(event) {
//                navigator.pop({
//                    animated: "true"
//                });
//            },
//            reload(event) {
//                webview.reload(this.$refs.wv)
//            },
//            error(event) {
////                console.log('error', event)
//            }
        }
    }
</script>
<style scoped>
    .webview {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .web {
        position: fixed;
        top: 60px;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>