package com.barcode;

import android.annotation.TargetApi;
import android.app.Activity;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowInsets;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript. This is
     * used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "barcode";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        if (Build.VERSION.SDK_INT >= 20) {
            setTranslucent();
        }
        super.onCreate(savedInstanceState);
    }

    @TargetApi(20)
    private void setTranslucent() {
        final Activity activity = this;
        ViewGroup decorView = (ViewGroup) activity.getWindow().getDecorView();
        decorView.setOnApplyWindowInsetsListener(new View.OnApplyWindowInsetsListener() {
            @Override
            public WindowInsets onApplyWindowInsets(View v, WindowInsets insets) {
                WindowInsets defaultInsets = v.onApplyWindowInsets(insets);
                return defaultInsets.replaceSystemWindowInsets(defaultInsets.getSystemWindowInsetLeft(), 0,
                        defaultInsets.getSystemWindowInsetRight(), defaultInsets.getSystemWindowInsetBottom());
            }
        });
    }
}
