# React Native 삽질용 저장소

처음 React Native를 접하면서 시도한 것들과 느낀 것들입니다.

## 메모

기본 템플릿만 가지고는 시작할 때에 설정해주어야 할 것들이 너무 많아서(어휴) 새 프로젝트 만들 때 안 까먹으려고 써놓습니다.

### 처음부터 Typescript와 함께하려면...

1. Typescript와 함께 하고 싶다면 `--template typescript`를 붙이면 된대서
2. WebStorm으로 프로젝트 만들 때에 `npx --package react-native-cli react-native --template typescript init rnpractice` 했는데
3. `tsconfig.ts` 생성 안됨! (실망)

### 다 만들어진 프로젝트에 Typescript 붙이기

1. `npm install --save-dev typescript @types/react @types/react-native` 실행.
2. `tsconfig.json` 만들어서 잘 채우기.
3. JSON을 읽고 싶다면 `"resolveJsonModule": true`를 `compilerOptions`에 추가하기.

### Jest 돌아가게 만들기

1. 테스트 돌리니까 `renderer.create(<App />);`
   부분에서 `type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object.`
   라며 뻗음.
2. 알고보니 jest 설정 문제였음.
3. `package.json`의 jest 설정 부분을 아래와 같이 바꾸면 됨.

```
  "jest": {
    "preset": "react-native",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js"
    ]
  }
```

> 고마워요 스택오버플로! (https://stackoverflow.com/questions/61473512/why-is-my-jest-test-failing-in-react-native-with-typescript)

### 안드로이드에 배포하기

1. SDK 경로를 그냥 찾아주는게 아니기 때문에 환경변수를 통해 전달해 주어야 함.
2. `ANDROID_HOME`과(실행을 위해) 적절한 `PATH`를(왜인지는 모르겠지만 커맨드라인에서 도움 될 것 같아서) 설정해 주면 됨.
3. `ANDROID_HOME`을
   빼먹었다가는 `SDK location not found. Define location with an ANDROID_SDK_ROOT environment variable or by setting the sdk.dir path in your project's local properties file at '/Users/potados/WebstormProjects/rnpractice/android/local.properties'.`
   같은 무시무시한 에러를 보게 될 것임.

### (심화) WebStrom에서 안드로이드에 배포하기

1. WebStorm의 run configuration 중에 `react-native run-android`를 조금 있어보이게(?) 실행해주는 configuration이 있다.
2. 근데 해당 명령 전후에 다른 명령을 붙이는게 좀 까다로워서
3. `npm run android`처럼 쓸 수 있게 만들어 놓은 `android` 스크립트를 쓰기로 했다.
4. 해당 `android` 스크립트는 본 명령 실행 전에 환경변수 export하는 파일(`platformsetup/android.sh)을 source한다.

### 안 쓰는 설정 파일 제거

1. `.editorconfig`: 해당없음
2. `.gitattributes`: 윈도 안써서 무관
3. `.watchmanconfig`: 텅텅 비어서 무쓸모

### iOS 에서 실행하기

1. 괴랄한 빌드 에러 마주함(https://velog.io/@maliethy/react-native-ios-compile-error).
2. `Podfile`에서 `use_flipper!()` 줄을 주석처리함.
3. 잘 됨.

### Ionicon 사용하기

1. 여러 아이콘들을 쓰고 싶다면
2. `npm i react-native-vector-icons`
3. `npm i --save-dev @types/react-native-vector-icons`

### iOS에서 Ion icon 사용하기

1. `ios/rnpractice/Info.plist` 열고
2. 아래 엔트리 추가.

```
<key>UIAppFonts</key>
    <array>
      <string>AntDesign.ttf</string>
      <string>Entypo.ttf</string>
      <string>EvilIcons.ttf</string>
      <string>Feather.ttf</string>
      <string>FontAwesome.ttf</string>
      <string>FontAwesome5_Brands.ttf</string>
      <string>FontAwesome5_Regular.ttf</string>
      <string>FontAwesome5_Solid.ttf</string>
      <string>Foundation.ttf</string>
      <string>Ionicons.ttf</string>
      <string>MaterialIcons.ttf</string>
      <string>MaterialCommunityIcons.ttf</string>
      <string>SimpleLineIcons.ttf</string>
      <string>Octicons.ttf</string>
      <string>Zocial.ttf</string>
    </array>
```

### Android에서 Ion icon 사용하기

1. 여기도 마찬가지로 폰트 사용 설정이 필요하다.
2. `android/app/build.gradle` 맨 위에
3. `apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"` 추가.

## 오늘의 교훈

### 2021.5.4

- `ios`나 `android` 디렉토리 날리면 큰일나겠다 싶다.
- 아니 이럴거면 어차피 iOS나 Android나 네이티브 할 줄 알아야 하는건가....ㅠ
