package com.weex.app.extend;

import android.content.Context;
import android.support.annotation.NonNull;
import android.util.Log;
import android.widget.FrameLayout;

import com.github.tcking.viewquery.ViewQuery;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.Constants;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXVContainer;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXComponentProp;
import com.taobao.weex.utils.WXViewUtils;

import tcking.github.com.giraffeplayer2.VideoInfo;
import tcking.github.com.giraffeplayer2.VideoView;


public class AndroPlayer extends WXComponent<VideoView> {
    private ViewQuery $;
    private int aspectRatio = VideoInfo.AR_ASPECT_FIT_PARENT;
    protected int mOrientation = Constants.Orientation.VERTICAL;

    public AndroPlayer(WXSDKInstance instance, WXDomObject dom, WXVContainer parent) {
        super(instance, dom, parent);
        parent.detachViewAndClearPreInfo();
//        instance.setSize(32, 32);
//        instance
    }


    @Override
    protected MeasureOutput measure(int width, int height) {
            MeasureOutput measureOutput = new MeasureOutput();
            if (this.mOrientation == Constants.Orientation.HORIZONTAL) {
                int screenW = WXViewUtils.getScreenWidth(WXEnvironment.sApplication);
                int weexW = WXViewUtils.getWeexWidth(getInstanceId());
                measureOutput.width = width > (weexW >= screenW ? screenW : weexW) ? FrameLayout.LayoutParams.MATCH_PARENT
                        : width;
                measureOutput.height = height;
            } else {
                int screenH = WXViewUtils.getScreenHeight(WXEnvironment.sApplication);
                int weexH = WXViewUtils.getWeexHeight(getInstanceId());
                measureOutput.height = height > (weexH >= screenH ? screenH : weexH) ? FrameLayout.LayoutParams.MATCH_PARENT
                        : height;
                measureOutput.width = width;
            }
            return measureOutput;
//        }

//        return super.measure(width, height);
    }

    @Override
    protected VideoView initComponentHostView(@NonNull Context context) {
//        getInstance().setInstanceViewPortWidth(4);

        Log.v("ADebugTag", "Value: " + Float.toString(getInstance().getInstanceViewPortWidth()));

        VideoView videoView = new VideoView(context);
//        videoView.getCoverView().setMaxHeight(32);
//        videoView.getCoverView().setMaxWidth(32);
        videoView.setVideoPath("http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4");
        videoView.measure(23, 23);
//        VideoInfo videoInfo = new VideoInfo(Uri.parse("http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4"));
//        GiraffePlayer.play(getContext(), videoInfo);
        return videoView;
//        Log.v("yellow", "host");


//        getInstance().getContainerView().
//        videoView.findViewById(R.id.);

//        videoView.getPlayer().aspectRatio(aspectRatio);

//        return videoView;
    }



    @WXComponentProp(name = "src")
    public void setSrc(String source) {
        Log.v("source tag", source);
//        getHostView().getCoverView();
//        String uri = "http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4";
//        VideoInfo videoInfo = new VideoInfo(Uri.parse(uri));
////                .setTitle("test video") //config title
////                .setAspectRatio(aspectRatio) //aspectRatio
////                .setShowTopBar(true) //show mediacontroller top bar
////                .setPortraitWhenFullScreen(true);//portrait when full screen
//        GiraffePlayer.play(getContext(), videoInfo);
//        Float mWidth = getLayoutHeight();
//        Float mHeight = getLayoutWidth();
//        System.out.println("width: "+mWidth+"   height: "+mHeight);

//        getHostView().setVideoPath(source).getPlayer();
//        getHostView().setVideoPath(source).getPlayer().toggleFullScreen();
//        getHostView().setPlayerListener(new DefaultPlayerListener() {
//
//
//            @Override
//            public void onDisplayModelChange(int oldModel, int newModel) {
//                if (newModel == GiraffePlayer.DISPLAY_FULL_WINDOW) {
//
//                    //do something
//                    Log.v("yellow", "host");
//                    Log.d("ADebugTag", "Value: " + Float.toString(oldModel));
//                    Log.d("ADebugTag", "Value: " + Float.toString(newModel));
//
//                }
//            }
//        });
    }
}
