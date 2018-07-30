package com.weex.app.extend;

import android.content.Context;
import android.support.annotation.NonNull;
import android.util.Log;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXComponentProp;
import com.taobao.weex.ui.component.WXVContainer;

import tcking.github.com.giraffeplayer2.DefaultPlayerListener;
import tcking.github.com.giraffeplayer2.GiraffePlayer;
import tcking.github.com.giraffeplayer2.VideoView;


public class AndroPlayer extends WXComponent<VideoView> {

    public AndroPlayer(WXSDKInstance instance, WXDomObject dom, WXVContainer parent) {
        super(instance, dom, parent);
    }

    @Override
    protected VideoView initComponentHostView(@NonNull final Context context) {
        Log.v("ADebugTag", "Value: " + Float.toString(getInstance().getInstanceViewPortWidth()));
        Log.v("ADebugTag", "From androplayer: " + getParent());

        final VideoView videoView = new VideoView(context);
        return videoView;
    }


    @WXComponentProp(name = "src")
    public void setSrc(String source) {
        Log.v("source tag", source);
        getHostView().setVideoPath(source).getPlayer();
        getHostView().setPlayerListener(new DefaultPlayerListener() {


            @Override
            public void onDisplayModelChange(int oldModel, int newModel) {
                if (newModel == GiraffePlayer.DISPLAY_FULL_WINDOW) {

                    //do something
                    Log.v("yellow", "host");
                    Log.d("ADebugTag", "Value: " + Float.toString(oldModel));
                    Log.d("ADebugTag", "Value: " + Float.toString(newModel));

                } else if (newModel == GiraffePlayer.DISPLAY_NORMAL) {
                    getHostView().getContainer().removeAllViews();
                    // manage views if on normal display
                }
            }
        });
    }


}
