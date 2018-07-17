<template>
    <div class="wrapper">
        <scroller>
            <list>
                <refresh class="refresh" @refresh="onrefresh" :display="refreshing ? 'show' : 'hide'">
                    <text class="indicator">Refreshing ...</text>
                    <loading-indicator></loading-indicator>
                    <!--TODO: later for loading  -->
                    <!--<loading class="loading" :display="loadinging ? 'show' : 'hide'">-->
                    <!--<text class="indicator">Loading ...</text>-->
                    <!--</loading>-->
                </refresh>
                <cell class="video-cell" v-for="obj in videoObjects" :key="obj.slug" v-if="obj.is_completed">
                    <div class="text-cell" @click="routeTo(obj)">
                        <image :src="obj.pic" class="video-image"/>
                        <div class="meta">
                            <text class="text-title">{{obj.name}}</text>
                            <text class="text-created">{{obj.created}}</text>
                        </div>
                    </div>
                </cell>
            </list>
        </scroller>
    </div>
</template>

<script>
    import Helper from '../../../mixins/Helper'

    const modal = weex.requireModule('modal')
    const stream = weex.requireModule('stream')
    export default {
        data() {
            return {
                videoObjects: '',
                refreshing: false,
                showLoading: 'hide',
                loadinging: false
            }
        },
        methods: {
            getVideos(url, callback) {
                var self = this;
                return stream.fetch({
                    method: 'GET',
                    type: 'json',
                    url: 'http://52.202.70.246/v1/' + url,
                    headers: {
                        'Authorization':
                            `JWT ${self.$store.getters.token}`
                    }
                }, callback)
            },
            onrefresh(event) {
                console.log('is refreshing')
                this.loadinging = true

                this.showLoading = 'show'
                this.refreshing = true
                console.log(this.showLoading)
                if (this.refreshing === true) {
                    this.getVideos('video/?page_size=0', res => {
                        this.videoObjects = res.ok ? res.data : this.$router.push('/error')
                    })
                    this.refreshing = false
                    this.showLoading = 'hide'
                }
                setTimeout(() => {
                    this.loadinging = false
                }, 2000)

            },
            routeTo(obj) {
                console.log(obj)
                if (obj.is_local) {
                    this.$router.push({name: 'Local Video Detail', params: {slugId: obj.slug}})
                } else {
                    console.log('clicked me')
                    this.$router.push({name: 'External Video Detail', params: {slugId: obj.slug}})
                }
            }
        },
        mixins: [Helper],
        created() {
            if (this.refreshing === true) {
                this.refreshing = false
            }
            this.getVideos('video/?page_size=0', res => {
                this.videoObjects = res.ok ? res.data : this.$router.push('/error')
            })
        }
    }
</script>


<style scoped>

    .video-image {
        width: auto;
        height: 450px;
        margin-top: 5px;
        margin-bottom: 35px;
        flex-direction: column;
        justify-content: center;
    }

    .meta {
        margin-bottom: 15px;
        margin-left: 10px;
    }

    .text-title {
        font-size: 25px;
        padding: 0;
    }

    .text-created {
        font-size: 20px;
        color: #848484;
        padding-top: 0;
    }

    /*!*REFRESH*!*/
    /*.indicator {*/
    /*color: #888888;*/
    /*font-size: 42px;*/
    /*text-align: center;*/
    /*}*/

    /*.panel {*/
    /*width: 600px;*/
    /*height: 250px;*/
    /*margin-left: 75px;*/
    /*margin-top: 35px;*/
    /*margin-bottom: 35px;*/
    /*flex-direction: column;*/
    /*justify-content: center;*/
    /*border-width: 2px;*/
    /*border-style: solid;*/
    /*border-color: #DDDDDD;*/
    /*background-color: #F5F5F5;*/
    /*}*/

</style>