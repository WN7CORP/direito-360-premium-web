
// Device detection utility

export const getDeviceType = (): 'iOS' | 'Android' | 'unknown' => {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

  // iOS detection
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return 'iOS';
  }

  // Android detection
  if (/android/i.test(userAgent)) {
    return 'Android';
  }

  return 'unknown';
};

export const getAppStoreLink = (): string => {
  const deviceType = getDeviceType();
  
  if (deviceType === 'iOS') {
    return 'https://apps.apple.com/us/app/direito-premium/id6451451647';
  } else if (deviceType === 'Android') {
    return 'https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0&pli=1';
  } else {
    // Default to Android link for desktop users or unknown devices
    return 'https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0&pli=1';
  }
};
