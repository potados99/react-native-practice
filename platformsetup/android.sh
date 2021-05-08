# Run before 'react-native run-android'.

# See https://reactnative.dev/docs/environment-setup for more details.
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools

# Jetifier is deprecated and will not be run automatically
# with future versions of 'react-native run-android'.
# So we run it manually before 'react-native run-android'.
npx jetify

