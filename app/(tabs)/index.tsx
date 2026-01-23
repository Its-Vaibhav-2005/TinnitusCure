import React, { useEffect, useRef, useState } from "react";
import { WebView } from 'react-native-webview';
import { SafeAreaView } from "react-native-safe-area-context";
import {View, StyleSheet, Platform, Linking, ActivityIndicator, BackHandler} from "react-native";
import { htmlContent } from "@/constants/readHTML";

export default function ReadScreen(){
  const webViewRef = useRef<WebView>(null);

  const [canGoBack, setCanGoBack] = useState(false)

  useEffect(()=>{
    if(Platform.OS==='android'){
      const onBackPress= () => {
        if(canGoBack && webViewRef.current){
          webViewRef.current.goBack()
          return true;
        }
        return false
      };
      const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress)

      return () => backHandler.remove()
    }
  }, [canGoBack])
  
  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <iframe 
          srcDoc={htmlContent} 
          style={{ width: '100%', height: '100%', border: 'none' }} 
          title="web-content"
        />
      </View>
    );
  }

  const handleLinkPress = (request: any)=>{
    const {url, navigationType} = request

    if(url.startsWith('http') && navigationType==='click'){
      Linking.openURL(url).catch((err)=>console.error("Couldn't load Page", err))
      return false;
    }
    return true
  }

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        originWhitelist={['*']}
        source={{html: htmlContent}}

        onNavigationStateChange={(navState) => {
          setCanGoBack(navState.canGoBack);
        }}

        onShouldStartLoadWithRequest={handleLinkPress}

        allowsBackForwardNavigationGestures={true}
        
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        renderLoading={() => (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#007AFF" />
          </View>
        )}
      />  
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 0,
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: 99,
  },
});
