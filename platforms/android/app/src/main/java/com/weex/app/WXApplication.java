package com.weex.app;

import android.app.Application;

import com.weex.app.extend.GiraffePlayer;
import com.weex.app.extend.ImageAdapter;
import com.weex.app.extend.WXEventModule;
import com.weex.app.extend.RichText;
import com.alibaba.weex.plugin.loader.WeexPluginContainer;
import com.weex.app.extend.YoutubePlayer;
import com.weex.app.util.AppConfig;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;

public class WXApplication extends Application {

  @Override
  public void onCreate() {
    super.onCreate();
    WXSDKEngine.addCustomOptions("appName", "WXSample");
    WXSDKEngine.addCustomOptions("appGroup", "WXApp");
    WXSDKEngine.initialize(this,
        new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build()
    );
    try {
      WXSDKEngine.registerModule("event", WXEventModule.class);
      WXSDKEngine.registerComponent("ijk", RichText.class);
      WXSDKEngine.registerComponent("giraffeplayer", GiraffePlayer.class);
      WXSDKEngine.registerComponent("youtubeplayer", YoutubePlayer.class);
    } catch (WXException e) {
      e.printStackTrace();
    }
    AppConfig.init(this);
    WeexPluginContainer.loadAll(this);
  }
}
