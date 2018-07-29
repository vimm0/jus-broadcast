package com.weex.app.extend;

import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.support.annotation.NonNull;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.RelativeLayout;
import android.content.pm.ActivityInfo;

import com.pierfrancescosoffritti.androidyoutubeplayer.player.YouTubePlayer;
import com.pierfrancescosoffritti.androidyoutubeplayer.player.YouTubePlayerView;
import com.pierfrancescosoffritti.androidyoutubeplayer.player.listeners.AbstractYouTubePlayerListener;
import com.pierfrancescosoffritti.androidyoutubeplayer.player.listeners.YouTubePlayerFullScreenListener;
import com.pierfrancescosoffritti.androidyoutubeplayer.player.listeners.YouTubePlayerInitListener;
import com.pierfrancescosoffritti.androidyoutubeplayer.player.playerUtils.FullScreenHelper;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXComponentProp;
import com.taobao.weex.ui.component.WXVContainer;


public class YoutubePlayer extends WXComponent<YouTubePlayerView> {
    public YoutubePlayer(WXSDKInstance instance, WXDomObject dom, WXVContainer parent) {
        super(instance, dom, parent);

    }

    @Override
    protected YouTubePlayerView initComponentHostView(@NonNull Context context) {
        final YouTubePlayerView youtubePlayerView = new YouTubePlayerView(context);
        youtubePlayerView.addFullScreenListener(
                new YouTubePlayerFullScreenListener() {
                    @Override
                    public void onYouTubePlayerEnterFullScreen() {
                        ViewGroup.LayoutParams viewParams = youtubePlayerView.getLayoutParams();
                        Log.v("ADebugTag", "Value: " + Float.toString(viewParams.height));
                        Log.v("ADebugTag", "Value: " + Float.toString(viewParams.width));

                        viewParams.height = ViewGroup.LayoutParams.WRAP_CONTENT;
                        viewParams.width = ViewGroup.LayoutParams.WRAP_CONTENT;
                        youtubePlayerView.setLayoutParams(viewParams);
                    }

                    @Override
                    public void onYouTubePlayerExitFullScreen() {
                        ViewGroup.LayoutParams viewParams = youtubePlayerView.getLayoutParams();
                        viewParams.height = ViewGroup.LayoutParams.WRAP_CONTENT;
                        viewParams.width = ViewGroup.LayoutParams.MATCH_PARENT;
                        youtubePlayerView.setLayoutParams(viewParams);
                    }
                }
        );
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
                                initializedYouTubePlayer.loadVideo("WS-Hgtl6jA0", 0);
                            }
                        });
            }
        }, true);

    }
}
