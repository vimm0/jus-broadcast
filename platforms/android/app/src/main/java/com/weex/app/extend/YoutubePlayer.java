package com.weex.app.extend;

import android.content.Context;
import android.support.annotation.NonNull;
import android.util.Log;
import android.webkit.WebChromeClient;
import android.webkit.WebView;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXComponentProp;
import com.taobao.weex.ui.component.WXVContainer;


public class YoutubePlayer extends WXComponent<WebView> {
    public YoutubePlayer(WXSDKInstance instance, WXDomObject dom, WXVContainer parent) {
        super(instance, dom, parent);

    }

    @Override
    protected WebView initComponentHostView(@NonNull Context context) {
        Log.v("yellow", "host");
        WebView webview = new WebView(getContext());
        webview.setWebChromeClient(new WebChromeClient());
        webview.getSettings().setJavaScriptEnabled(true); // xss vulnerabilities

        return webview;
    }

    @Override
    protected void onHostViewInitialized(WebView host) {
        super.onHostViewInitialized(host);
    }

    @WXComponentProp(name = "src")
    public void setSrc(String source) {
        Log.v("source", source);
        getHostView().loadUrl(source);
    }
}
