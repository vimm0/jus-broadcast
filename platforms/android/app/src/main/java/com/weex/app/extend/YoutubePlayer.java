package com.weex.app.extend;

import android.content.Context;
import android.content.pm.ActivityInfo;
import android.support.annotation.NonNull;
import android.util.Log;
import android.view.OrientationEventListener;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebChromeClient;
import android.widget.LinearLayout;

import com.pierfrancescosoffritti.androidyoutubeplayer.player.YouTubePlayer;
import com.pierfrancescosoffritti.androidyoutubeplayer.player.YouTubePlayerView;
import com.pierfrancescosoffritti.androidyoutubeplayer.player.listeners.AbstractYouTubePlayerListener;
import com.pierfrancescosoffritti.androidyoutubeplayer.player.listeners.YouTubePlayerFullScreenListener;
import com.pierfrancescosoffritti.androidyoutubeplayer.player.listeners.YouTubePlayerInitListener;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXComponentProp;
import com.taobao.weex.ui.component.WXVContainer;
import com.taobao.weex.utils.WXViewUtils;


public class YoutubePlayer extends WXComponent<YouTubePlayerView> {
    public YoutubePlayer(WXSDKInstance instance, WXDomObject dom, WXVContainer parent) {
        super(instance, dom, parent);

    }


    @Override
    protected YouTubePlayerView initComponentHostView(@NonNull final Context context) {
        final YouTubePlayerView youtubePlayerView;
        youtubePlayerView = new YouTubePlayerView(context);
//        YouTubePlayerView youtubePlayerView = new YouTubePlayerView(context);
//        getHostView().addView(youtubePlayerView);
//        youtubePlayerView.addFullScreenListener(
//                new YouTubePlayerFullScreenListener() {
//                    @Override
//                    public void onYouTubePlayerEnterFullScreen() {
//                        youtubePlayerView.setRotation(90);
//                        ViewGroup.LayoutParams viewParams = youtubePlayerView.getLayoutParams();
//                        Log.v("ADebugTag", "Value: " + Float.toString(viewParams.height));
//                        Log.v("ADebugTag", "Value: " + Float.toString(viewParams.width));
//                        viewParams.height = ViewGroup.LayoutParams.MATCH_PARENT;
//                        viewParams.width = ViewGroup.LayoutParams.MATCH_PARENT;
//                        youtubePlayerView.setLayoutParams(viewParams);
//                        youtubePlayerView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE
//                                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
//                                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
//                                | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
//                                | View.SYSTEM_UI_FLAG_FULLSCREEN);
//                    }
//
//                    @Override
//                    public void onYouTubePlayerExitFullScreen() {
//                        youtubePlayerView.setRotation(0);
//                        ViewGroup.LayoutParams viewParams = youtubePlayerView.getLayoutParams();
//                        viewParams.height = ViewGroup.LayoutParams.WRAP_CONTENT;
//                        viewParams.width = ViewGroup.LayoutParams.MATCH_PARENT;
//                        youtubePlayerView.setLayoutParams(viewParams);
//                    }
//                }
//        );

        return youtubePlayerView;
    }


    @WXComponentProp(name = "src")
    public void setSrc(String source) {
        Log.v("source", source);
        getHostView().initialize(new YouTubePlayerInitListener() {
            @Override
            public void onInitSuccess(final YouTubePlayer initializedYouTubePlayer) {
                initializedYouTubePlayer.addListener(
                        new AbstractYouTubePlayerListener() {
                            @Override
                            public void onReady() {
                                initializedYouTubePlayer.loadVideo("r2LpOUwca94", 0);
//                                mWebView.setWebChromeClient(new WebChromeClient());

                            }
                        });
            }
        }, true);

    }
}
