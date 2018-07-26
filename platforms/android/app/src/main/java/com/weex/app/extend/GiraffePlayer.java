package com.weex.app.extend;

import android.content.Context;
import android.support.annotation.NonNull;
import android.util.Log;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXVContainer;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXComponentProp;

import tcking.github.com.giraffeplayer2.VideoView;


public class GiraffePlayer extends WXComponent<VideoView> {
    public GiraffePlayer(WXSDKInstance instance, WXDomObject dom, WXVContainer parent) {
        super(instance, dom, parent);
    }

    @Override
    protected VideoView initComponentHostView(@NonNull Context context) {
//        return super.initComponentHostView(context);
        //        String videoUri = "http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4";
        Log.v("yellow", "host");
        VideoView videoView = /*(VideoView) findViewById(R.id.video_view);*/ new VideoView(getContext());
        return videoView;
    }

    @Override
    protected void onHostViewInitialized(VideoView host) {
        super.onHostViewInitialized(host);

    }

    @WXComponentProp(name = "src")
    public void setSrc(String source) {
        Log.v("source tag", source);
        getHostView().setVideoPath(source);
    }
}